"use client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Thema } from "./thema";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Thema>{children}</Thema>
    </Provider>
  );
}