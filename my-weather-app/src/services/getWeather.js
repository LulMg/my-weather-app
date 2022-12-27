import { ajax } from "../tools/ajax";

export const getWeather = async (city) => {
    const optionRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
           q: city,
           appid: "7394cafc6b2ac52931cf7033bd3542ff",
           units: "metric" //esto es para que nos lo traiga en grados centígrados, si no, por defecto vienen en otra unidad
        }
    };
    return await ajax(optionRequest);
}