import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";


const selectedCategory = "NEW";
const Sidebar = () => {
  return (
    <Stack
      direction="column"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "coulumn" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white"
          }}
          key={category.name}
        >
          <span
          style={{marginRight:'15px',
          color:category.name===selectedCategory ? 'white' : 'red'}}>{category.icon}</span>
          <span style={{opacity:category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
