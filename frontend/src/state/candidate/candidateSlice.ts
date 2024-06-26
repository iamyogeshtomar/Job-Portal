// import { candidateSignUpSchemaType } from "@/lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerCandidate, loginCandidate } from "./candidateService";
import {
  candidateLoginSchemaType,
  candidateSignUpSchemaType,
} from "@/lib/types";
import { extractErrorMessage } from "@/lib/utils";

// import { unknown } from "zod";

// const candidate = localStorage.getItem("candidate")

type candidateState = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  institute: string;
  token: string;
};

const candidate: candidateState = JSON.parse(
  localStorage.getItem("candidate") || "{}"
);

const initialState = {
  candidate: candidate ? candidate : null,
  error: "",
};

// register candidate
export const registerCandidateThunk = createAsyncThunk(
  "candidate/register",
  async (candidateData: candidateSignUpSchemaType, thunkAPI) => {
    try {
      console.log(candidateData);
      const candidateCredentials = registerCandidate(candidateData);
      localStorage.setItem("candidate", JSON.stringify(candidateCredentials));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// login candidate
export const loginCandidateThunk = createAsyncThunk(
  "candidate/login",
  async (candidateData: candidateLoginSchemaType, thunkAPI) => {
    try {
      // console.log(candidateData);
      const candidateCredentials = loginCandidate(candidateData);
      localStorage.setItem("candidate", JSON.stringify(candidateCredentials));
    } catch (error) {
      throw thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    logout: (state) => {
      state.candidate = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCandidateThunk.fulfilled, (state, action) => {
        // Ensure action.payload is properly handled, which includes additional metadata
        if (action.payload) {
          state.candidate = action.payload;
        }
      })
      .addCase(registerCandidateThunk.rejected, () => {
        console.log("Cannot register candidate");
      })
      .addCase(loginCandidateThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.candidate = action.payload;
        }
      })
      .addCase(loginCandidateThunk.rejected, (error, thunkAPI) => {
        console.log("Cannot login candidate");
        throw thunkAPI.rejectWithValue(extractErrorMessage(error));
      });
  },
});

export default candidateSlice.reducer;

// const candidateSlice = createSlice({
//   name: "candidate",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.candidate = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(
//         registerCandidateThunk.fulfilled,
//         (state, action: PayloadAction<candidateState>) => {
//           state.candidate = action.payload;
//         }
//       )
//       .addCase(registerCandidateThunk.rejected, () => {
//         console.log("Cannot register candidate");
//       });
//   },
// });
