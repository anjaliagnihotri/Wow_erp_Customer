
import axios from 'axios';
export const CustomerlistData = (pageNo) => {

//   return axios.get("http://localhost:8009/getSubUser")

     // return axios.get(`http://localhost:8009/getSubUser?page=${pageNo}`)
     return axios.get(`https://backend-ie38.vercel.app/getSubUser?page=${pageNo}`)

}

export const SalesListData = (pageNo) => {

     // return axios.get(`https://backend-ie38.vercel.app/getCompanypage=${}`)
     return axios.get(`https://backend-ie38.vercel.app/getCompany?page=${pageNo}`)
}
export const contactgroupAdd = () => {
     
     return axios.post(`http://localhost:8009/group`)
}




