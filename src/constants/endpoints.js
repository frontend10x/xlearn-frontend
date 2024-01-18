export const PROGRESS_STORE = '/api/v1/progress/store'

export const GET_PROGRESS = (courseId, userId) =>`/api/v1/progress/user?course_id=${courseId}&user_id=${userId}`

export const STORE_LESSON_COMMENTS = (lessonId) => `/api/v1/lesson/addcomment_user/${lessonId}`

export const LIST_LESSON_COMMENTS = (lessonId) => `/api/v1/lesson/listComment/${lessonId}`

export const NOTE_STATUS_CHANGE = (noteId) =>
  `/api/v1/lesson/changeStateNote/${noteId}`;


