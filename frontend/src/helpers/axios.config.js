import axios from 'axios'

const BackendURL = "http://localhost:8000/youtube/api/v1"

// const BackendURL = 'https://youtube-backend-no3k.onrender.com/youtube/api/v1'

const api = axios.create({baseURL : BackendURL})     

export default api