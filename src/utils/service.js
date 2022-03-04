const baseurl = "http://localhost:8000/api/v1"


const auth = {
    signIn(){
        return baseurl + "/signup"
    },
}

const service = {
    baseurl,
    auth
}

export default service
