import client from "./APIKit";

const defaultJSONConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const API = {
  product: {
    getProducts: async (params = {}) => {
      const url = "/products";
      return client
        .get(url, { params })
        .then(({ data }) => data)
        .catch((err) => console.error(err));
    },

    postProduct: async (payload) => {
        const url = "/products";
        return client.post(url, payload, defaultJSONConfig);
      },
  },
};

export default API
