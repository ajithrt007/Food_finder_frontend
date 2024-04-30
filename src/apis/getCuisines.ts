import { baseUrl } from "@/constants";
import axios from "axios";


export default async function getCuisines() {
    const api = `${baseUrl}api/getCuisines/`;
    try {
        const response = await axios.get(api, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        let payload = response;

        if (payload.status === 200) {
            return payload.data
        }
        if (payload.status === 400) {
            console.log(payload.status, " Client Error:", payload.statusText)
        }
        if (payload.status === 500) {
            console.log(payload.status, " Server Error:", payload.statusText)
        }

        return null
    } catch (error: any) {
        console.log("getCuisines API error: ", error);
        if (error.isAxiosError && error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.isAxiosError) {
            // The request was made but no response was received
            console.log(error.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }

        // Return null or an appropriate fallback value
        return null;
    }
}