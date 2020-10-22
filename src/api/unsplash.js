import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID gX8ZC8C_VxakJxZaRZre9btGZSOfq-h4zzEai1jLWsU`
      }
});