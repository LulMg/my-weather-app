import { ajax } from "../tools/ajax";

export const getCities = (countryCode) =>{
    const optionRequest = {
        method: 'GET',
        url: 'https://spott.p.rapidapi.com/places',
        headers: {
            'X-RapidAPI-Key': '38ce3265f4msh0762c343e212412p143ea7jsn6d9391d0d6f4',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
          },
        params:{
            limit: 10,
            type: "CITY",
            country: countryCode ?? "ES",
        }
    }

    return ajax(optionRequest)
}