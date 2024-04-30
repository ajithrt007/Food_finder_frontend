interface FormContextValue {
    hasTableBooking: boolean,
    hasOnlineDelivery: boolean,
    cuisineSelected: cuisinesOptions[],
    serachkey: string,
    selectedSort: string,
    selectedOrder: string,
    ratingRange: number[],
    pageNo: number,
    setHasTableBooking: (value: boolean) => void;
    setHasOnlineDelivery: (value: boolean) => void;
    setCuisineSelected: (value: cuisinesOptions[]) => void;
    setSerachkey: (value: string) => void;
    setSelectedSort: (value: string) => void;
    setSelectedOrder: (value: string) => void;
    setRatingRange: (value: number[]) => void;
    setPageNo: (value: number) => void;
}