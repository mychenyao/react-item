import axios from 'axios'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.status === 200 && response.data) {
        const {data, status} = response.data
        if (status === 200) {
            return data || {}
        }
    }
    return Promise.reject(response.data);
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})
