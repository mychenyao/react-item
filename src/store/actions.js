export function setUserData(data) {
    return dispatch => {
         new Promise((resolve => {
            setTimeout(() => {
                resolve('陈尧'+666)
            }, 3000)
        })).then(res => {
            dispatch({
                type: "USER_DATA",
                data: res
            })
        })
    }
}
