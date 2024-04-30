import { baseUrl } from "@/constants";
import axios from "axios";

export default async function getRestaurants(hasTableBooking?: boolean, hasOnlineDelivery?: boolean, cuisineSelected?: string[], serachkey?: string, selectedSort?: string, selectedOrder?: string, ratingRange?: number[], pageNo?: number) {
    const params = new URLSearchParams();
    if (hasTableBooking) params.append("has_table_booking", "1");
    if (hasOnlineDelivery) params.append("has_online_delivery", "1");
    if (cuisineSelected?.length) params.append("cuisines", cuisineSelected.join(","));
    if (serachkey) params.append("search_string", serachkey);
    if (selectedSort) params.append("sort_by", selectedSort);
    if (selectedOrder) params.append("order", selectedOrder);
    if (ratingRange?.length === 2) {
        params.append("rating_low", ratingRange[0].toString());
        params.append("rating_high", ratingRange[1].toString());
    }
    if (pageNo !== undefined) params.append("page_no", pageNo.toString());

    const api = `${baseUrl}api/getRestaurantsInfo/?${params.toString()}`;
    console.log(api)
    try {
        const response = await axios.get(api, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        let payload = response;
        // console.log(payload)

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
    } catch (error) {
        console.log("getCuisines API error: ", error)
        return null
    }
}