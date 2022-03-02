const baseurl = "http://localhost:8000/api/v1"

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
        return baseurl + '/common/document-types'
    }
}

const  service = {
    baseurl, commons
}

export default service