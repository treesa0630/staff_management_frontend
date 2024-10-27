import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const addFacultyApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/faculty_details`,reqBody)
}

export const getFacultyDetailsApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/faculty_details`)
}

export const addDepartmentApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/department`, reqBody)
}

export const getDepartmentApi = async()=>{
    return await commonApi('GET', `${serverUrl}/department`)
}

export const deleteDepartmentApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/department/${id}`)
}

export const addprofileToDepartmentApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/department/${id}`,reqBody)

}

export const deleteFacultyApi=async(id)=>
    {
        return await commonApi('DELETE',`${serverUrl}/faculty_details/${id}`)
    }
export const addResignedApi=async(reqBody)=>
{
    return await commonApi('POST',`${serverUrl}/resigned`,reqBody)
}

export const getResignedApi=async()=>
{
    return await commonApi('GET',`${serverUrl}/resigned`)
}
