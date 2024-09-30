import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../feature/todoSlice";
import loginReducer from "../feature/loginSlice";
import openCategoryReducer from "../feature/openCategorySlice";
import openItemReducer from "../feature/openItemSlice";
import openPopupReducer from "../feature/openPopupSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    login: loginReducer,
    openCategory: openCategoryReducer,
    openItem: openItemReducer,
    openPopup: openPopupReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// 型の定義のエクスポート
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;