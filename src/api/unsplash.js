import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID quUy2x7RLfiqLMlyHpED1fi0t8lnZXa3IWFaLVcn7go",
  },
});
