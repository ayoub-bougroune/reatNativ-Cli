import { createSlice } from "@reduxjs/toolkit";
import { SubCategoriesState } from "../../types/categories";

const initialState: SubCategoriesState = {
  id: 0,
  SubCategories: {
    items: [],
    search_criteria: {
      filter_groups: [],
    },
    total_count: 0,
  },
  error: "",
  loading: false,
};

export const SubcategoriesSlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {
    loadSubCategoriesStart: (state, { payload: { id } }) => {
      state.id = id;
      state.loading = true;
      return state;
    },

    loadSubCategoriesSuccess: (state, action) => {
      state.SubCategories = action.payload;
      state.loading = false;
    },

    loadSubErrorCategories: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loadSubCategoriesStart,
  loadSubCategoriesSuccess,
  loadSubErrorCategories,
} = SubcategoriesSlice.actions;

export default SubcategoriesSlice.reducer;
