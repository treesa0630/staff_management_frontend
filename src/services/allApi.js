import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addFacultyApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/faculty_details`,reqBody)
}

export const getFacultyDetailsApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/faculty_details`)
}