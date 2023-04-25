import { createSlice } from "@reduxjs/toolkit";
import { CategoriesState } from "../../types/categories";

const initialState: CategoriesState = {
  loading: false,
  Categories: {
    items: [],
    search_criteria: {
      filter_groups: [],
    },
    total_count: 0,
  },
  error: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    loadCategoriesStart: (state) => {
      return state;
    },

    loadCategoriesSuccess: (state, action) => {
      state.Categories = action.payload;
      state.loading = false;
    },

    loadErrorCategories: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loadCategoriesStart,
  loadCategoriesSuccess,
  loadErrorCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
