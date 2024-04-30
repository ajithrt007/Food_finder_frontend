import { useEffect, useState } from "react";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext";
import getRestaurants from "@/apis/getRestaurants";

export default function SearchResults() {
  const {
    hasTableBooking,
    hasOnlineDelivery,
    cuisineSelected,
    serachkey,
    selectedSort,
    selectedOrder,
    ratingRange,
    pageNo,
    setPageNo,
  } = useContext(FormContext);
  let [response, setResponse] = useState<any>({});
  let [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let selectedCuisineValues: string[] = [];
    cuisineSelected.forEach((item) => {
      if (!selectedCuisineValues.includes(item.cuisine))
        selectedCuisineValues.push(item.cuisine);
    });
    getRestaurants(
      hasTableBooking,
      hasOnlineDelivery,
      selectedCuisineValues,
      serachkey,
      selectedSort,
      selectedOrder,
      ratingRange,
      pageNo
    )
      .then((response) => {
        if (response) {
          console.log(response);
          setResponse(response["response"]);
          setTotal(response["total"]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    hasTableBooking,
    hasOnlineDelivery,
    cuisineSelected,
    serachkey,
    selectedSort,
    selectedOrder,
    ratingRange,
    pageNo,
  ]);
  return (
    <div className="pt-10 pb-8 flex flex-col gap-6 w-full">
      <div className="w-full flex items-center justify-between px-10">
        <p className="text-2xl">
          Search Results{" "}
          {/* {results.length > 0 ? `(${results["data"]["total"]} rows)` : `0 rows`} */}
        </p>
        <p className="text-white/[.25]">
          {total ? `${20 * pageNo}/${total} rows` : `0 rows`}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              pageNo > 1 ? setPageNo(pageNo - 1) : {};
            }}
            className="rounded-full p-2 h-[30px] aspect-square bg-orange-600 flex items-center justify-center"
          >
            -
          </button>
          <input
            type="text"
            name=""
            id=""
            className="w-[30px] text-black p-1 rounded text-center"
            value={pageNo}
          />
          <button
            onClick={() => setPageNo(pageNo + 1)}
            className="rounded-full p-2 h-[30px] aspect-square bg-orange-600 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between px-10 opacity-50">
          <p className="w-[320px] overflow-x-hidden">Restaurent Name</p>
          <p className="w-[100px]">Votes</p>
          <p className="w-[100px]">Rating</p>
          <p className="w-[100px]">Latitude</p>
          <p className="w-[100px]">Longitude</p>
        </div>
        {response &&
          response.length > 0 &&
          response.map((item: any) => (
            <div
              className="flex justify-between px-10 even:bg-[#272829] py-2"
              key={item.id}
            >
              <p className="w-[320px] overflow-x-hidden">{item.name}</p>
              <p className="w-[100px]">{item.votes}</p>
              <p className="w-[100px]">{item.rating}</p>
              <p className="w-[100px]">{item.lattitude}</p>
              <p className="w-[100px]">{item.longitude}</p>
            </div>
          ))}

        {/* <p>{JSON.stringify(response)}</p> */}
      </div>
    </div>
  );
}
