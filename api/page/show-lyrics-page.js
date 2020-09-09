require('dotenv').config();
const supertest = require('supertest');

const api = supertest(process.env.BASE_URL);

const getLyrics = (artist, song) => api.get(`/v1/${artist}/${song}`);

module.exports = {
  getLyrics,
};
