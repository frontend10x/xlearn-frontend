import { PROGRESS_STORE } from "../../constants/endpoints"
import http from "../https";

export const storeProgress = async (payload) => {
    console.log("payload", payload)

    const { data = {} } = await http.post(PROGRESS_STORE, payload);

    return data

}