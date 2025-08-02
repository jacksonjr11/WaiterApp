import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import {Header} from "./Header";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
    </React.Fragment>
  );
}
