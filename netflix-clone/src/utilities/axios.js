

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});
export default instance;



// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://api.themoviedb.org/3', // Base URL for all API requests
// });

// export default instance;
