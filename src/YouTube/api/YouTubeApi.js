import axios from "axios";

const KEY = "AIzaSyChk3DZSOFrhMszbnTM81UYNujGmVfa8Z0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
