import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext";
import getCuisines from "@/apis/getCuisines";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function SideBar() {
  const {
    hasTableBooking,
    hasOnlineDelivery,
    setHasTableBooking,
    setHasOnlineDelivery,
    cuisineSelected,
    setCuisineSelected,
    ratingRange,
    setRatingRange,
  } = useContext(FormContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRatingRange(newValue as number[]);
  };
  function valuetext(value: number) {
    return `${value}`;
  }

  const handleChangeTableBooking = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasTableBooking(event.target.checked);
  };

  const handleChangeHasDelivery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasOnlineDelivery(event.target.checked);
  };
  const [cuisineOptions, setCuisineOptions] = useState<cuisinesOptions[]>([]);
  //   {
  //     id: 1,
  //     cuisine: "French",
  //   },
  //   {
  //     id: 2,
  //     cuisine: "Japanese",
  //   },
  //   {
  //     id: 3,
  //     cuisine: "Desserts",
  //   },
  //   {
  //     id: 4,
  //     cuisine: "Seafood",
  //   },
  // ];
  useEffect(() => {
    getCuisines()
      .then((response) => {
        if (response) {
          // console.log(response["cuisines"]);
          setCuisineOptions(response["cuisines"]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [inputCuisineValue, setInputCuisineValue] = useState("");
  return (
    <div className="p-10 w-[20%]">
      <h3 className="text-2xl mb-3">Filters</h3>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm">Customer Rating</p>
          <div className="flex justify-center p-2">
            <Slider
              getAriaLabel={() => "Rating range"}
              value={ratingRange}
              step={0.1}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={5}
              getAriaValueText={valuetext}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FormControlLabel
            control={
              <Checkbox
                checked={hasTableBooking}
                onChange={handleChangeTableBooking}
                name="Has table booking"
              />
            }
            label="Has table booking"
          />
        </div>
        <div className="flex gap-2 items-center">
          <FormControlLabel
            control={
              <Checkbox
                checked={hasOnlineDelivery}
                onChange={handleChangeHasDelivery}
                name="Has online delivery"
              />
            }
            label="Has online delivery"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Autocomplete
            value={cuisineSelected ?? []}
            className="w-full"
            onChange={(event: any, newValue: cuisinesOptions[]) => {
              setCuisineSelected(newValue);
            }}
            inputValue={inputCuisineValue}
            onInputChange={(event, newInputValue) => {
              setInputCuisineValue(newInputValue);
            }}
            multiple
            id="tags-outlined"
            options={cuisineOptions}
            getOptionLabel={(option) => option.cuisine}
            defaultValue={[]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Select Cuisines" placeholder="" />
            )}
            disableCloseOnSelect
          />
          {/* <Autocomplete
            value={cuisineSelected ?? []}
            className="w-full"
            onChange={(event: any, newValue: cuisinesOptions[] | null) => {
              setCuisineSelected(newValue);
            }}
            inputValue={inputCuisineValue}
            onInputChange={(event, newInputValue) => {
              setInputCuisineValue(newInputValue);
            }}
            multiple
            id="tags-outlined"
            options={cuisineOptions}
            getOptionLabel={(option) => option.cuisine}
            defaultValue={[]}
            filterSelectedOptions
            filterOptions={(options, state) => {
              const filtered = options.filter(
                (option) =>
                  !state.value?.some((value) => value.id === option.id)
              );
              return filtered;
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Cuisines" placeholder="" />
            )}
            disableCloseOnSelect
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.cuisine}
              </li>
            )}
          /> */}
        </div>
      </div>
    </div>
  );
}
