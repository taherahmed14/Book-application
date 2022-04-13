import { createStore } from "@reduxjs/toolkit";
import { reducer } from "../Features/reducer";

export const store = createStore(reducer);