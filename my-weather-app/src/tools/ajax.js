import axios from "axios";

export const ajax = async (options) => await axios.request(options).then(response => response.data);

//ajax= "asynchronous JS and xml", es como tradicionalmente se conocen los servicios de peticiones asincrónicos"