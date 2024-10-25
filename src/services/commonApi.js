import axios from "axios";

export const commonApi = async(httpmethod, url, reqbody, reqHeader)=>{
    const reqConfig={
        method : httpmethod,
        url,
        data:reqbody,
        Headers: {'content-Type':'application/json'}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}