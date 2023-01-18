import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IField } from "../../types/types";
import { fetchFields } from "../actions/fetchFieldsAction";

export interface IFieldsState {
  fields: IField[];
  loading: boolean;
  error: string;
}

const initialState: IFieldsState = {
  fields: [],
  loading: false,
  error: "",
};

export const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFields.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchFields.fulfilled, (state, action) => {
        state.fields = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const fieldsReducer = fieldsSlice.reducer;
export default fieldsReducer;
