import { createContext } from "react";

export const FormContext = createContext<FormContextValue>({
    hasTableBooking: false,
    hasOnlineDelivery: false,
    cuisineSelected: [],
    serachkey: '',
    selectedSort: '',
    selectedOrder: '',
    ratingRange: [],
    pageNo: 1,
    setHasTableBooking: () => { },
    setHasOnlineDelivery: () => { },
    setCuisineSelected: () => { },
    setSerachkey: () => { },
    setSelectedSort: () => { },
    setSelectedOrder: () => { },
    setRatingRange: () => { },
    setPageNo: () => { }
})