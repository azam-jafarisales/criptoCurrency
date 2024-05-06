import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import styles from "./styles.module.css";

const Search = ({ search, onSearchChange }) => {
  return (
    <div className={styles.search_container}>
      <SearchRoundedIcon />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
