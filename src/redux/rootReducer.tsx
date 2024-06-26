// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import videoModalReducer from "./features/videoModalSlice";
import searchModalReducer from "./features/searchModalSlice";
import lightboxReducer from "./features/lightboxSlice";

const rootReducer = combineReducers({
  videoModal: videoModalReducer,
  searchModal: searchModalReducer,
  lightbox: lightboxReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
