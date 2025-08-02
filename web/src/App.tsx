import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import {Header} from "./Header";
import { Orders } from "./Orders";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Orders />
    </React.Fragment>
  );
}
