import axios from "axios";

// axios.defaults.baseURL = "https://voosh-backend-8a98.onrender.com/";
// axios.defaults.baseURL = "https://voosh-backend-8a98.onrender.com/";
axios.defaults.baseURL = "http://localhost:3008/";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/json";

let api = {
  addProduct: (data) => axios.post("add-product", data),
  getProducts: (data) => axios.get("get-products", data),
  addOrder: (data) => axios.post("add-order", data),
  getOrders: (data) => axios.get("get-orders", data),

  generateOrder: (data) => axios.post("generateOrder", data),
};
export default api;
