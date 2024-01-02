import axios from "axios";

export const url = 'http://192.168.223.35:8000/';

export const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ...`,
    },
  };

export const GetRequest = async (url:string, headers:any) => {
    try {
        const res = await axios.get(url, {
            headers,
            timeout: 120000,
        });
        const { status, data } = res;
        return {status, data};
    }catch(err:any){
        if(axios.isCancel(err)){
            console.log('Request was canceled due to timeout')
        }else{
            console.error('Error fetching data:', err)
        }
        return {status:err.response.status || err.request.status || 500}
    }
}

export const PostRequest = async (url:string, payload:any, headers:any) => {
    try {
        const res = await axios.post(url, payload, headers);
        const {status, data} = res;
        return {status, data};
    }catch(err:any){
        return {
            status:err.response.status || err.request.status,
            error:err.response.data.result,
        }
    }
}

