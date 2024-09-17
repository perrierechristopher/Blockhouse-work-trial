import axios from "axios";

const localUrl = "http://127.0.0.1:8000/api"

export const requestToApi = (path: string, methodX: string, data: any = null, params: any={}) => {
    const controller = new AbortController();
    let contentType = "";
    const signal = controller.signal;
  
    if (!window.navigator.onLine) {
      return;
    }
    if (!!data) {
      if (data instanceof FormData) {
        contentType = "multipart/form-data";
      } else {
        contentType = "application/json";
      }
    }
  
    let fetchBodyAxios: any = {
      method: methodX,
      url: `${localUrl}${path}`,
      headers: {
        "Content-type": contentType,
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      signal,
      params
    };
  
    if (data) {
      fetchBodyAxios.data = data;
    }
  
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios(fetchBodyAxios);
        resolve(response.data);
      } catch (e: any) {
        console.log(e)
        if (e.code === "ECONNABORTED") {
          controller.abort();
          reject('Connection Aborted')
        } else {
          if (axios.isCancel(e)) {
            return console.log("Request Cancelled");
          }
          e.response?.status === 401
            ? (() => {
  
                // TO UNCOMMENT
                window.location.href = window.location.origin;
                return
              })()
            : reject(e?.response?.data?.message);
        }
      } finally {
        // Cancel previous request
        // controller.abort();
      }
    });
  };
  