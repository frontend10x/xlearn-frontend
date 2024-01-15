import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import "../../assets/css/componentes/StyleCommunityChat.css";
import {
  listLessonComments,
  storeLessonComments,
} from "../../services/apis/lessons.services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CommunityChat = ({ videoCurrent }) => {
  const [comments, setComments] = useState([]);
  const lessonId = videoCurrent?.lessonId;
  const {name} = useSelector(state => state?.auth);

  const getLessonsComments = async () => {
    const list = await listLessonComments(lessonId);
    setComments(list?.comments);
  };

  const addLessonComments = async (data) => {
    const res = await storeLessonComments(data, lessonId);
  };

  useEffect(() => {
    getLessonsComments();
  }, [lessonId]);

  return (

      <div className="" style={{ width: "100%" }}>
        <a
          style={{ color: "black", cursor: "pointer" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/AdvancedComponent.tsx"
        ></a>
        <CommentSection
          currentUser={{
            currentUserId: "01a",
            currentUserImg:
              "https://ui-avatars.com/api/name=Riya&background=random",
            currentUserProfile:
              "https://www.linkedin.com/in/riya-negi-8879631a9/",
            currentUserFullName: `${name}`, // Reemplazar data
          }}
          /* hrStyle={{ border: "0px solid #ff0072" }} */
          commentData={comments}
          currentData={(data) => {
            // console.log("curent data", data);
          }}
          logIn={{
            loginLink: "http://localhost:3001/",
            signupLink: "http://localhost:3001/",
          }}
          customImg="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"
          inputStyle={{ border: "1px solid rgb(208 208 208)" }}
          formStyle={{ backgroundColor: "white" }}
          submitBtnStyle={{
            border: "1px solid black",
            backgroundColor: "black",
            padding: "7px 15px",
          }}
          cancelBtnStyle={{
            border: "0px solid gray",
            backgroundColor: "gray",
            color: "white",
            padding: "7px 15px",
          }}
          advancedInput={true}
          replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
          onSubmitAction={(data) => addLessonComments(data)}
          onReplyAction={(data) => addLessonComments(data)}
        />
      </div>
  );
};
