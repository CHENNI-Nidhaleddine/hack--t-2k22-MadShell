import http from "../http-common"
class DataService{
    getCompany(id){
        return http.get(`/companies/${id}`,company)
    }
}
export default new DataService;