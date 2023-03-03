import axios from "axios";
const KEY="AIzaSyCOadZr2wunPNnmqhESNzvSwH5KO9yfM3M"

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:"snippet",
        maxResults:10,
        key:KEY
    }   
})