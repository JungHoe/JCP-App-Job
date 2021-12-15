import React, { useEffect } from "react";
import Styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import ErrorPage from "./components/ErrorPage";

import Conter from "./containers/Counter";
import JobManagement from "./containers/JobManagement";

const Container = Styled.div`
  background:pink;
`;
type AppProps = {
  name: string;
};
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});
// RunSaga
sagaMiddleware.run(rootSaga);

function App({ name }: AppProps) {
  useEffect(() => {
    console.log("APP INIT#####");
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
              <Link to="/counter">redux test COUNTER</Link>
            </li>
            <li>
              <Link to="/asdf">errorPage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="counter" element={<Conter></Conter>}></Route>
          <Route path="/" element={<JobManagement></JobManagement>}></Route>
          <Route
            path="*"
            element={
              <ErrorPage message="존재하지 않는 페이지 요청입니다."></ErrorPage>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
