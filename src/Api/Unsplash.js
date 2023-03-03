import axios from "axios";
export default axios.create({
    
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID z6CoFpdTOyMDwb70gTTHlkf5Hncuzayu9KR4dyNKykQ'
    }
    });

