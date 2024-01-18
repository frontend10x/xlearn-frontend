import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeaderDashboard } from "../../../componentes/dashboards/HeaderDashboard";
import { getLessons } from "../../../services/services";
import VideoPlayer from "./components/VideoPlayer";
import LessonSideMenu from "./components/LessonSideMenu";
import { InfoVideoPlayer } from "../../../componentes/dashboards/InfoVideoPlayer";
import { IconRutaPlayer, IconRutaExamen } from "../../../assets/img";
import {
  getProgress,
  storeProgress,
} from "../../../services/apis/progress.services";
import { Col } from "react-bootstrap";
import { evaluationCourse } from "../../../services/services";

import "../../../assets/css/screens/dashboards/StyleCoursePlayback.css";
import { Header } from "../../../componentes/Header";
import { CommunityChat } from "../../../componentes/CommunityChat/CommunityChat";
import "../../../assets/css/componentes/StyleCoursePlayback.css";
import { RichText } from "../../../componentes/Commons/NoteEditor/RichText";

const CorusePlayback = () => {
  const { course_id, name } = useParams();
  const { token, id } = useSelector((state) => state.auth);
  const [lessons, setLessons] = useState();
  const [videoCurrent, setVideoCurrent] = useState();
  const [videoStatus, setVideoStatus] = useState();
  const [progress, setProgress] = useState();
  const [destroy, setDestroy] = useState(false);
  const [evaluation, setEvaluation] = useState();
  const [visibility, setVisibility] = useState("Comunidad");

  const navigate = useNavigate();

  useEffect(() => {
    getVideos();
    consultProgress(
      {
        course_id: course_id,
        user_id: id,
      },
      true
    );
  }, [token, course_id]);

  useEffect(() => {
    if (progress && lessons) {
      const currentLesson = progress?.progress?.find((prg) => prg.current);

      const currentIndex = progress?.progress?.findIndex((prg) => prg.current);

      let activeLesson =
        currentLesson?.percentage_completion === 100
          ? lessons.at(currentIndex + 1)
          : lessons.at(currentIndex === -1 ? 0 : currentIndex);

      if (!activeLesson) activeLesson = lessons.at(currentIndex);

      const progressCurrent = progress?.progress?.find(
        (prg) => prg?.lesson_id === activeLesson?.id
      );

      progress?.changeLesson &&
        setVideoCurrent({
          percentage: progressCurrent?.percentage_completion,
          currentTime: progressCurrent?.advanced_current_time,
          name: activeLesson?.name,
          video: activeLesson?.player_embed_url,
          vimeoId: activeLesson?.vimeo_id,
          lessonId: activeLesson?.id,
        });
    }
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [progress, lessons]);

  const show = (e) => {
    if (e?.target?.value === "Comunidad") {
      setVisibility("Comunidad");
    } else if (e?.target?.value === "Notas") {
      setVisibility("Notas");
    }
    console.log(e.target.value);
  };

  function quiz() {
    evaluationCourse(token, course_id)
      .then((event) => {
        setEvaluation(true);
      })
      .catch((error) => {
        console.error(error);
        setEvaluation(false);
      });
  }

  useEffect(()=>{
    quiz();
  },[])

  const getVideos = async () => {
    const data = await getLessons(token, course_id);
    const key = data?.response?._rel;
    const videos = data?.response?._embedded[key];
    setLessons(videos);
  };

  const changeVideo = ({ name, player_embed_url, vimeo_id, id, index }) => {
    setVideoCurrent({
      index,
      name: name,
      video: player_embed_url,
      vimeoId: vimeo_id,
      lessonId: id,
    });

    setDestroy(true);
  };

  const handlingProgress = ({ duration, percent, seconds }) => {
    const payload = {
      course_id: course_id,
      user_id: id,
      lesson_id: videoCurrent?.lessonId,
      percentage: percent * 100,
      advanced_current_time: seconds,
      total_video_time: duration,
    };
    seconds &&
      storeProgress(payload)
        .then(() => {
          const change = percent === 1;
          consultProgress(payload, change);
        })
        .catch((error) => console.log(error));
  };

  const consultProgress = (payload, changeLesson = false) => {
    getProgress(payload).then(({ progress }) => {
      progress = { progress, changeLesson };
      setProgress(progress);
    });
  };

  const redirect = () => {
    navigate(`/presentacion/evaluacion/${name}/${course_id}`);
  };

  const getCurrentVideoTime = (currentVideoTime) => setVideoStatus(currentVideoTime);

  return (
    <div className="video__reproduccion-section">
      <Header />
      <div className="video__reproduccion-container">
        {/* <div className="video__reproduccion-content" >
                    <h2 style={{ color: 'white' }}>{name}</h2>
                    <button>Comunidad</button>
                </div> */}
        <div className="content_curso_interno">
          <div className="video__reproduccion-container-player">
            <div className="nav_ruta">
              <div className="xlnMenu__icon__player">
                <p className="ms-3">Ruta</p>
                <img src={IconRutaPlayer} className="ms-3" />
              </div>

              {lessons?.map((video, key) => {
                let obj = progress?.progress?.find(
                  (prg) => prg.lesson_id === video?.id
                );
                return (
                  <LessonSideMenu
                    progress={obj}
                    key={key}
                    index={key}
                    video={video}
                    changeVideo={changeVideo}
                  />
                );
              })}
              {evaluation && (
                <button
                  className="xln-btn-couseExamen mt-3 ms-3"
                  onClick={redirect}
                >
                  <img src={IconRutaExamen} />
                </button>
              )}
            </div>

            <div className="vide_ruta">
              <VideoPlayer
                videoCurrent={videoCurrent}
                destroy={destroy}
                handlingProgress={handlingProgress}
                getVideoStatus={getCurrentVideoTime} 
                
              />
            </div>

            <div className="content_comunnityAndNotes">
              <div className="completo">
                <button
                  className="btn xln-btn-community fw-bold"
                  value="Comunidad"
                  onClick={show}
                  style={
                    visibility === "Comunidad"
                      ? { backgroundColor: "#03ff84", color: "#002333" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  Comunidad
                </button>
                <button
                  className="btn xln-btn-community fw-bold "
                  value="Notas"
                  onClick={show}
                  style={
                    visibility === "Notas"
                      ? { backgroundColor: "#03ff84", color: "#002333" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  Notas
                </button>

                {visibility === "Notas" && (
                  <div className="mt-2">
                    <RichText
                      videoCurrent={videoCurrent}
                      videoStatus={videoStatus}
                    />
                  </div>
                )}
                {visibility === "Comunidad" && (
                  <div className="content-Chat-comunnity">
                    <CommunityChat videoCurrent={videoCurrent} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoVideoPlayer videoCurrent={videoCurrent} />
    </div>
  );
};

export default CorusePlayback;
