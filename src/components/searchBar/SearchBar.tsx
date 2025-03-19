import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "../app/App.types";
import { string } from "yup";

const SearchBar:React.FC<SearchBarProps> = ({onSubmit}) => {
const [value, setValue] = useState<string>('');

const handleSubmit = ((event:React.FormEvent)=>{
    event.preventDefault();
    if (value.trim() === "") {
        toast.error("Please enter a search query.");
        return;
      }
    onSubmit(value);
    setValue('');
})

return(
    <header className={css.header}>
    <form onSubmit={handleSubmit} className={css.form}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={value}
      onChange={(e) => setValue(e.target.value)}
     className={css.formImput}
    />
    <button type="submit" className={css.searchBtn}>Search</button>
    </form>
    </header>

         )
     }
     
     export default SearchBar;      