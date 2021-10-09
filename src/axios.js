import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-frontend-a1b26.cloudfunctions.net/api',
});

// http://localhost:5001/frontend-a1b26/us-central1/api

export default instance;
