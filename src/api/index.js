import axios from 'axios'
import SERVER_PATH from './config.js'

//const instance = axios.create();
const interceptor = {
    defaultRequestThen(config){
        if(interceptor.requestThen && typeof interceptor.requestThen == 'function'){
            interceptor.requestThen(config);
        }
        return config
    },
    defaultRequestCatch(error){
        if(interceptor.requestCatch && typeof interceptor.requestCatch == 'function'){
            interceptor.requestCatch(error);
        }
        return Promise.reject(error)
    },
    defaultResponseThen(response){
        if(interceptor.responseThen && typeof interceptor.responseThen == 'function'){
            interceptor.responseThen(response);
        }
        return response
    },
    defaultResponseCatch(error){
        if(interceptor.responseCatch && typeof interceptor.responseCatch == 'function'){
            interceptor.responseCatch(error);
        }
        return Promise.reject(error)
    },
}
function create(){
    const instance = axios.create({
        baseURL:SERVER_PATH,
        headers:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type':'application/json; charset=utf-8',
        },
        withCredentials:true,
    });
    addDefaultInterceptors(instance);
    return instance
}

function addDefaultInterceptors  (instance=axios){
    if(interceptor.defaultRequest){
        instance.interceptors.request.eject(interceptor.defaultRequest)
    }
    if(interceptor.defaultResponse){
        instance.interceptors.request.eject(interceptor.defaultResponse)
    }
    interceptor.defaultRequest = instance.interceptors.request.use(interceptor.defaultRequestThen,interceptor.defaultRequestCatch);
    interceptor.defaultResponse = instance.interceptors.response.use(interceptor.defaultResponseThen,interceptor.defaultResponseCatch);
}

export function setAjaxHeaders(data) {
  for(let key in data) {
    $http.defaults.headers[key] = data[key]
  }
}

export var $interceptor = interceptor
export const $http = create()