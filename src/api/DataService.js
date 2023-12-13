import axios from "axios";

const BASE_URL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/";
const API_KEY = "uGTpgMzYzfezYoTaZkwFgKnsyXeholXD";
const DataService = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: API_KEY,
  },
});

export default DataService;
