import axios from "axios";

const myApi = axios.create({
  baseURL: "https://fatema-habiba-marketplace.herokuapp.com/api",
});

//categories
export const fetchCategories = () => {
  return myApi.get(`/categories`).then((res) => {
    return res.data;
  });
};

//items
export const fetchItems = () => {
  return myApi.get(`/items`).then((res) => {
    return res.data;
  });
};

export const fetchItemsByCategory = (category_name) => {
  return myApi.get(`/items?category_name=${category_name}`).then((res) => {
    return res.data;
  });
};

export const fetchItemsByID = (id) => {
  return myApi.get(`/items/${id}`).then((res) => {
    return res.data;
  });
};

//users
export const fetchUsers = () => {
  return myApi.get(`/users`).then((res) => {
    return res.data;
  });
};

export const fetchUserById = (username) => {
  return myApi.get(`/users/${username}`).then((res) => {
    return res.data;
  });
};
//PATCH /api/users/:username

export const modifyUserByUsername = (username) => {
  return myApi.patch(`/users/${username}`).then((res) => {
    return res.data;
  });
};

//basket
//order
/*
GET /api/categories

POST /api/categories

GET /api/items

POST /api/items

GET /api/items/:item_id

DELETE /api/items/:item_id

GET /api/users

POST /api/users

GET /api/users/:username



GET /api/users/:username/basket

POST /api/users/:username/basket

DELETE /api/users/:username/basket

GET /api/users/:username/orders

POST /api/users/:username/orders
*/
