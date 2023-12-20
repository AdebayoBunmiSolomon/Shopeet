import axios from "axios";

export const url = 'http://192.168.43.146:8000/';

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

