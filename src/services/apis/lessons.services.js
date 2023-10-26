import { LIST_LESSON_COMMENTS, STORE_LESSON_COMMENTS } from "../../constants/endpoints";
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