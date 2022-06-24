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

export const modifyUserByUsername = (username, kudos_inc) => {
  return myApi.patch(`/users/${username}`, { kudos_inc }).then((res) => {
    return res.data;
  });
};

//POST /api/categories
export const postCategory = (category_name) => {
  return myApi.post(`/categories`, { category_name }).then((res) => {
    return res.data;
  });
};

//POST /api/items
export const postItem = ({
  item_name,
  img_url,
  price,
  description,
  category_name,
}) => {
  return myApi
    .post(`/items`, { item_name, img_url, price, description, category_name })
    .then((res) => {
      return res.data;
    });
};

//POST /api/users
export const postUser = ({ username, avatar_url }) => {
  console.log(username);
  return myApi.post(`/users`, { username, avatar_url }).then((res) => {
    return res.data;
  });
};

//GET /api/users/:username/basket
export const getBasketByUser = (username) => {
  console.log(username);
  return myApi.get(`./users/${username}/basket`).then((res) => {
    return res.data;
  });
};

//POST /api/users/:username/basket
export const addToBasketByUser = (username, item_id) => {
  console.log(item_id, "itemId");
  return myApi.post(`./users/${username}/basket`, { item_id }).then((res) => {
    return res.data;
  });
};

//basket
//order
/*

GET /api/items/:item_id

DELETE /api/items/:item_id






DELETE /api/users/:username/basket

GET /api/users/:username/orders

POST /api/users/:username/orders
*/
