/**
* 获取本地存储Local数据
* */
export const getLocalStorage = key => {
    const data = localStorage.getItem(key)
    return data && typeof data === 'string' ? JSON.parse(data) : null
}
/**
* 设置本地存储Local数据
* */
export const setLocalStorage = (key, data) => {
    if (data || data === 0) localStorage.setItem(key, JSON.stringify(data))
}
/**
* 获取本地存储Session数据
* */
export const getSessionStorage = key => {
    const data = sessionStorage.getItem(key)
    return data && typeof data === 'string' ? JSON.parse(data) : null
}
/**
* 设置本地存储Session数据
* */
export const setSessionStorage = (key, data) => {
    if (data || data === 0) sessionStorage.setItem(key, JSON.stringify(data))
}
/**
 * 对象转成字符串参数
 * */
export const qsString = (obj, mark = true) => {
    let str = mark ? '?' : ''
    for (let k in obj) {
        const val = obj[k] || obj[k] === 0 ? `${k}=${obj[k]}&` : ''
        str += val
    }
    return str.indexOf('&') >= 1 ? str.substring(0, str.length - 1) : ''
}

/**
 * 获取url参数
 * */
export function UrlSearch() {
    const {href, search} = window.location
    let name, value, str = href, num = str.lastIndexOf("?"); //取得整个地址栏
    str = `${str.substr(num + 1)}${search ? search.replace('?', '&') : ''}`;  //取得所有参数   stringvar.substr(start [, length ]
    let arr = str.split("&"); //各个参数放到数组里
    for (let i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
