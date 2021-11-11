import http from "./http-common.js";
let token = sessionStorage.getItem("token");

let header = {
  headers: { token: token },
};

class AddressBookService {
  login(data) {
    return http.post("/login", data);
  }

  register(data) {
    return http.post("/saveUserData", data);
  }

  getAllAddressBookData = () => {
    token = sessionStorage.getItem("token");
    header = {
      headers: { token: token },
    };
    return http.get("/getAddressBookData", header);
  };

  getAddressBookById = (id) => {
    id = id || "";
    return http.get(`/getAddressBookData/${id}`, header);
  };

  createAddressBookData = (data) => {
    return http.post("/saveAddressBookData", data, header);
  };

  updateAddressBookId = (id, data) => {
    return http.put(`/updateAddressBookData/${id}`, data, header);
  };

  deleteAddressBookId = (id) => {
    return http.delete(`/deleteAddressBookData/${id}`, header);
  };
}

export default new AddressBookService();
