import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({onSubmit}) => {
const [value, setValue] = useState('');

const handleSubmit = ((event)=>{
    event.preventDefault();
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