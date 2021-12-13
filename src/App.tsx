import React, { useEffect } from "react";
import Styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import Conter from "./containers/Counter";

const Container = Styled.div`
  background:pink;
`;
type AppProps = {
  name: string;
};
const store = configureStore({ reducer: rootReducer, devTools: true });
function App({ name }: AppProps) {
  useEffect(() => {
    console.log("functoinCalled#####");
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>Hello World {name}</Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">COUNTER</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="counter" element={<Conter></Conter>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {};

export default App;
