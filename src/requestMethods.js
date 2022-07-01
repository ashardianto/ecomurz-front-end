import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmNmODQyZThhOWNlM2UwNjRjNjgwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjU2NzA1NiwiZXhwIjoxNjU2ODI2MjU2fQ.GRlWktJyNrqHwWQXB5zXytlfgb1TUPbuS_wkacOfddU"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})
