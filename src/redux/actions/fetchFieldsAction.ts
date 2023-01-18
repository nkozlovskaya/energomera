import { createAsyncThunk } from "@reduxjs/toolkit";
import { IField } from "../../types/types";

export const fetchFields = createAsyncThunk<
  IField[],
  string,
  { rejectValue: string }
>("fields/fetchFields", async (value, { rejectWithValue }) => {
  const response = await fetch(
    "http://agro.energomera.ru:3060/api/field?lastChangeDate=2022-01-01T10:00:00.000&skip=0&take=100",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ query: value }),
    }
  );
  const res = await response.json();

  if (!response.ok) {
    return rejectWithValue("Can't add task. Server error.");
  }

  return res.suggestions as IField[];
});
