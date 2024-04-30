import { FormContext } from "@/contexts/FormContext";
import { useState } from "react";

export default function FormProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hasTableBooking, setHasTableBooking] = useState<boolean>(false);
  const [hasOnlineDelivery, setHasOnlineDelivery] = useState<boolean>(false);
  const [cuisineSelected, setCuisineSelected] = useState<cuisinesOptions[]>([]);
  const [serachkey, setSerachkey] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [ratingRange, setRatingRange] = useState<number[]>([0, 5]);
  const [pageNo, setPageNo] = useState<number>(1);

  let result = {
    hasTableBooking,
    hasOnlineDelivery,
    cuisineSelected,
    serachkey,
    selectedSort,
    selectedOrder,
    ratingRange,
    pageNo,
  };
  console.log(result);

  return (
    <FormContext.Provider
      value={{
        hasTableBooking,
        hasOnlineDelivery,
        cuisineSelected,
        serachkey,
        selectedSort,
        selectedOrder,
        ratingRange,
        pageNo,
        setHasTableBooking,
        setHasOnlineDelivery,
        setCuisineSelected,
        setSerachkey,
        setSelectedSort,
        setSelectedOrder,
        setRatingRange,
        setPageNo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
