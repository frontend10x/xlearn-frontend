import { GET_PROGRESS, PROGRESS_STORE } from "../../constants/endpoints"
import http from "../https";

export const storeProgress = async (payload) => {

    const { data = {} } = await http.post(PROGRESS_STORE, payload);

    return data

}

export const getProgress = async ({course_id, user_id}) => {

    const { data = {} } = await http.get(GET_PROGRESS(course_id, user_id));

    return data
}