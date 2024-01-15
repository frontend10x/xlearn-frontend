import { LIST_LESSON_COMMENTS, NOTE_STATUS_CHANGE, STORE_LESSON_COMMENTS } from "../../constants/endpoints";
import http from "../https";

export const storeLessonComments = async (payload, lessonId) => {
    console.log("payload", payload)

    const { data = {} } = await http.post(STORE_LESSON_COMMENTS(lessonId), payload);

    return data
}

export const listLessonComments = async (lessonId) => {

    const { data = {} } = await http.get(LIST_LESSON_COMMENTS(lessonId));

    return data
}

export const changeStateNote = async (noteId, state) => {
  const { data = {} } = await http.put(NOTE_STATUS_CHANGE(noteId), { state });

  return data;
};

export const listedNotes = async (id) => {
  return await http.get(`/api/v1/lesson/listNoteUser/${id}`);
};

export const createNote = async (note, timeSecond, id) => {
  const body = {
    note,
    timeSecond,
  };

  return await http.post(`/api/v1/lesson/addNoteUser/${id}`,
    body
  );
};