const baseurl = "http://localhost:8000/api/v1"

// .ENV

// const routes = {
//     genders: baseurl + '/common/genders'
// }

const commons = {
    gender(id) {
        if(id != null)
            return baseurl + '/common/gender/' + id

        return baseurl + '/common/genders'
    },
    documenttype() {
        return baseurl + '/common/genders'
    }
}

const  service = {
    baseurl, commons
}

export default service