import axios from "axios";

// products
export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

// Blog

export const fetchBlogs = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
