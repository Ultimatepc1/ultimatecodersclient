import axios from 'axios'

export const register = newUser=>{
    return axios
    .post('users/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        phoneno: newUser.phoneno
    })
    .then(res => {
        console.log(res)
        return res.data.result
    })
    .catch(err=> {
        console.log("registererror "+err)
    })
}

export const login = newUser=>{
    return axios
    .post('users/login', {
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        if(res.data.error==null){
            localStorage.setItem('usertoken',res.data.token)
        }
        return res.data
    })
    .catch(err=> {
        console.log("loginerror "+err)
    })
}

export const home = newVisiter=>{
    return axios
    .get('users/courses', {
        // name: newUser.name,
        // email: newUser.email,
        // password: newUser.password,
        // phoneno: newUser.phoneno
    })
    .then(res => {
        //.log(res.data.result)
        if(res.data.error == null)
            return res.data.result
        else
            return res.data.error
    })
    .catch(err=> {
        console.log("registererror "+err)
    })
}

export const coursedetail = newVisiter=>{
    let route=newVisiter.routeid
    //console.log('route '+route)
    let url='/users/courses/'+route
    console.log(url)
    return axios
    .get(url, {
        // name: newUser.name,
        // email: newUser.email,
        // password: newUser.password,
        // phoneno: newUser.phoneno
    })
    .then(res => {
        //.log(res.data.result)
        if(res.data.error == null){
            //console.log(res.data.result)
            return res.data.result
        }
        else
            return res.data.error
    })
    .catch(err=> {
        console.log("registererror "+err)
    })
}