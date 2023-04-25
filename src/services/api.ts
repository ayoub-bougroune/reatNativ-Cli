import { instance } from "../constants/instance";
import { Customer } from "../types/customer";
import { Categories } from "../types/categories";
import { CartItem } from "../types/product";

export const signIn = async (username: string, password: string) =>
  await instance.post(`integration/customer/token`, { username, password });

export const signUp = async (customer: Customer, password: string) =>
  await instance.post(`customers`, { customer, password });

export const getCategories = async (): Promise<Categories[]> =>
  await instance.get(`categories/list?searchCriteria[filter_groups][0][filters][0][field]=parent_id&searchCriteria[filter_groups][0][filters][0][value]=2`);

export const ProductsByIdCat = async (id: number) =>
  await instance.get(`products?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]=${id}&searchCriteria[filterGroups][1][filters][0][field]=status&searchCriteria[filterGroups][1][filters][0][value]=1&searchCriteria[filterGroups][2][filters][0][field]=price&searchCriteria[filterGroups][2][filters][0][value]=1&searchCriteria[filterGroups][2][filters][0][condition_type]=from&searchCriteria[sortOrders][3][field]=position&searchCriteria[sortOrders][3][direction]=ASC`);

export const ProductsByIdSub = async (id: number) =>
  await instance.get(`products?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]=${id}&searchCriteria[filterGroups][1][filters][0][field]=status&searchCriteria[filterGroups][1][filters][0][value]=1&searchCriteria[filterGroups][2][filters][0][field]=price&searchCriteria[filterGroups][2][filters][0][value]=1&searchCriteria[filterGroups][2][filters][0][condition_type]=from&searchCriteria[sortOrders][3][field]=position&searchCriteria[sortOrders][3][direction]=ASC`);

export const SubCategories = async (id: number) =>
  await instance.get(`categories/list?searchCriteria[filter_groups][0][filters][0][field]=parent_id&searchCriteria[filter_groups][0][filters][0][value]=${id}&searchCriteria[sortOrders][0][field]=position&searchCriteria[sortOrders][0][direction]=ASC`);

export const searchProductAPI = async (text: string) =>
  await instance.get(`products?searchCriteria[filter_groups][1][filters][0][value]=%${text}%&searchCriteria[filter_groups][1][filters][0][condition_type]=like&searchCriteria[filter_groups][1][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][2][filters][0][field]=price&searchCriteria[filter_groups][2][filters][0][value]=0&searchCriteria[filter_groups][2][filters][0][condition_type]=neq`);

export const generateCartId = async () => await instance.post(`carts/mine`);

export const addItemAPI = async (cartItem: CartItem) => await instance.post(`carts/mine/items`, { cartItem });  

export const getCartItemsAPI = async () => await instance.get(`carts/mine/items`);

export const singleProduct = async (sku: string) => await instance.get(`products/${sku}`);

export const increment = async (id: number, cartItem: CartItem) => await instance.put(`carts/mine/items/${id}`, cartItem);

export const decrement = async (id: number, cartItem: CartItem) => await instance.put(`carts/mine/items/${id}`,{ cartItem });

export const deleteItem = async (id: number) => await instance.delete(`carts/mine/items/${id}`);

