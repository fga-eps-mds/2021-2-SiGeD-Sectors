const axios = require('axios');

const { DEMANDS_URL } = process.env;

const APIDemands = axios.create({
  baseURL: `http://${DEMANDS_URL}:3003/`,
});

module.exports = {
  APIDemands,
};