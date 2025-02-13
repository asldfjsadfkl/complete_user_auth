import axios from "axios";
import { backend_url } from "../Utils/backend_url_.js";

export const register = async (data) => {
  try {
    await axios.post(`${backend_url}/api/v1/signup`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {}
};

export const login = async (data) => {
  try {
    await axios.post(`${backend_url}/api/v1/signin`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {}
};

export const authuser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${backend_url}/api/v1/getuser`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(data);
  } catch (error) {}
};

export const logout = async () => {
  try {
    await axios.get(`${backend_url}/api/v1/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {}
};

export const deleteOnelist = async (id) => {
  try {
    await axios.delete(`${backend_url}/api/v1/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {}
};

///// pending
export const editOnelist = async (id) => {
  //     try {
  //         await axios.patch(`${backend_url}/list/${id}`, {
  //             headers: { "Content-Type": "application/json" },
  //             withCredentials: true,
  //         });
  //     } catch (error) { }
};
