import axios from "axios";

const blogFetch = axios.create({
    baseUrl : "https://jsonplaceholder.typicode.com"
});

export default blogFetch;