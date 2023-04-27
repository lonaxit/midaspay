import axios from "axios";

import { BASE_URL_APP, BASE_URL_AUTH } from "../config";


async function APIlogin(username, password) {
    try {
        const result = await axios.post(`${BASE_URL_APP}/token/login/`,
            {
                username, password
          }) 
   
        return result
        } catch (error) {
            return { err: `Error has occurred ${error}` };
        } 
  }
  
async function fetchProfile() {
    try {
        const result = await axios.get(`${BASE_URL_AUTH}/me`)
        return result
      } catch (error) {
        return { err: `Error has occurred ${error}` };
      }
  }
  
  export default {
    APIlogin,
    fetchProfile
  };