import axios from "axios"
 
const url = axios.create({ baseURL: "http://localhost:3000" })
 
export default {
  loadRestaurants: (category = null) => {
    let filter = category ? `?category=${category.title}` : ""
    return url.get(`/restaurants${filter}`)
  },

  loadCategories: () => url.get("/categories"),

  searchRestaurants: (search) => url.get(`/restaurants/search?q=${search}`),

  getRestaurant: (id) => url.get(`restaurants/${id}`)

}