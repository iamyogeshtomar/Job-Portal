import {
  candidateSignUpSchemaType,
  candidateLoginSchemaType,
} from "@/lib/types";
import axios from "axios";

const address = `http://localhost:5000`;

// registering candidate in db
export const registerCandidate = async (data: candidateSignUpSchemaType) => {
  const response = await axios.post(`${address}/signup`, data);

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }
  // console.log(response.data);
  return response.data;
};

// login candidate
export const loginCandidate = async (data: candidateLoginSchemaType) => {
  try {
    const response = await axios.post(`${address}/login`, data);

    // if (response.data) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw new Error (`${error.response.data.message}`)
    // console.log(error);
    // return error;
  }
};
