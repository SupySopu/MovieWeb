import serverAxiosInstance from "./serverAxiosInstance"

// el type quizas cambia
const createFilm = async (film: any) => {
    await serverAxiosInstance.post("/userFilms", film)
}

export const Serverservice = {
    createFilm
}