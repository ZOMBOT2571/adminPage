import axios from "axios";
import dotenv from "dotenv";

const url = `http://192.168.0.150:8000`
export async function mainCallerWithOutToken(path, method, data = null) {

  const options = {
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method,
    withCredentials: false,
  };

  if (data) {
    options.data = data;
  }

  try {
    const res = await axios(options);
    return res.data;
  } catch (err) {
    console.error("Request failed:", err);
    throw err; // Rethrow the error to be handled by the caller
  }
}

export const getToken = () => {
  const string = localStorage.getItem('token');
  if (string) {
    const json = JSON.parse(string);
    return json.user;
  } else {
    throw new Error("Token not found");
  }
};

export async function mainCaller(path, method = 'GET', data = null, headers = {}) {
  if (!headers.Authorization) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  const options = {
    method,
    url: url + path,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    withCredentials: false,
  };

  if (data) {
    options.data = data;
  }

  try {
    const res = await axios(options);
    return res.data;
  } catch (err) {
    console.error("Request failed:", err);
    throw err;
  }
}

export async function LoginAuthUser(username, password) {
  try {
    const { data } = await axios.post(
      `${url}/login`,
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return data;
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
}

export default mainCaller;