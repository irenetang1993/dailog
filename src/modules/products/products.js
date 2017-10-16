import axios from 'apis/axios'

export default {
  getProducts () {
    return axios.get(`/products`)
  },
  searchProds (param) {
    return axios.post(`/products/search`, param)
  }
}
