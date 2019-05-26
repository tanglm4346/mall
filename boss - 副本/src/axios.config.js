import axios from "axios";
import { Toast } from "antd-mobile";

axios.interceptors.request.use(() => {
  Toast.info("加载中", 0);
});
axios.interceptors.response.use(response => {
  console.info("interceptors", response);
  Toast.hide();
});
