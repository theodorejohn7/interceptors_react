import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-theo-default-rtdb.firebaseio.com/`,
});

instance.defaults.headers.common["Authorization"] =
 "Authorized by Theodore";

export default instance;