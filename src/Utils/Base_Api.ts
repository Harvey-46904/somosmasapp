const dev = {
  baseURL: "http://localhost:8000/api", //  backend local
};

const prod = {
  baseURL: "https://ivory-opossum-602732.hostingersite.com/api", // backend en producción
};

// Cambia según NODE_ENV
const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
