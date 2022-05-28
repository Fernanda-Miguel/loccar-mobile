import axios from 'axios'

const instance = axios.create({

    baseURL:'http://localhost/loccar-web/app/api/api.php'

})

export default instance;