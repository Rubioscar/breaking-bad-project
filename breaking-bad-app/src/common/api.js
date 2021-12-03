import { apiPath } from "common/constants";
import axios from "axios";

export const api = {
  list: () => axios.get(`${apiPath}characters`),
  details: (id) => axios.get(`${apiPath}characters/${id}`),
  quote: (name) =>
    axios.get(`${apiPath}quote/random`, {
      params: {
        author: name,
      },
    }),
};
