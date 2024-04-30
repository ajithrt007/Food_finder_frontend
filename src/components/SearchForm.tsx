import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext";

export default function SearchForm() {
  const {
    serachkey,
    selectedSort,
    selectedOrder,
    setSerachkey,
    setSelectedSort,
    setSelectedOrder,
  } = useContext(FormContext);

  const typesOfSort = ["name", "rating", "avg_cost", "price_range", "votes"];
  const sortOrder = ["ascending", "descending"];
  const handleChangeSelectedSort = (event: SelectChangeEvent) => {
    setSelectedSort(event.target.value);
  };

  const handleChangeSelectedOrder = (event: SelectChangeEvent) => {
    setSelectedOrder(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("hi");
  };
  return (
    <form
      className="px-10 py-5 text-black w-full flex items-center gap-3 border-b-[1px] border-[#FFFFFF]/[.25]"
      onSubmit={handleSubmit}
    >
      <TextField
        label={"Search Restaurant Name"}
        id="outlined-basic"
        variant="outlined"
        multiline={false}
        value={serachkey}
        InputProps={{
          readOnly: false,
        }}
        error={false}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSerachkey(event.target.value);
        }}
        className="w-[50%] h-full"
      />
      <FormControl sx={{ m: 1, width: 150 }} className="h-full">
        <InputLabel id="demo-simple-select-standard-label">
          {"Sort By"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSort}
          onChange={handleChangeSelectedSort}
          label={"Sort By"}
          renderValue={(selected) => selected}
        >
          {typesOfSort.map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150 }} className="h-full">
        <InputLabel id="demo-simple-select-standard-label">
          {"Sort Order"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOrder}
          onChange={handleChangeSelectedOrder}
          label={"Sort Order"}
          renderValue={(selected) => selected}
        >
          {sortOrder.map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        className="h-[55.98px] bg-orange-600 hover:bg-orange-800 text-white"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
