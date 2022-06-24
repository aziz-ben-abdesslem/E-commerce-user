import http from "./AxiosContext";
const getAll = () => {
  return http.get("/contact/getAll");
};
const create = data => {
  return http.post("/contact/create",data);
};
const update = (id, data) => {
  return http.put(`/contact/updatecontact/${id}`,data);
};
const remove = _id => {
  return http.delete(`/contact/deletecontact/${_id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};