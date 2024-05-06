import Pagination from "@mui/material/Pagination";

import styles from "./styles.module.css";

function PaginationControlled({ page, handleChange }) {
  return (
    <div className={styles.pagination_container}>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid darkslategray",
            padding: "0.5rem",
            fontSize: " 0.8rem",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--color-green)!important",
            borderColor: "var(--color-dark)",
            padding: "1rem",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </div>
  );
}

export default PaginationControlled;
