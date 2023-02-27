import React from "react";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
          {/* <!-- navbar --> */}
          <Navbar />

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            {/* <!-- header --> */}
            <Header />

            {/* <!-- todo list --> */}
            <TodoList />

            {/* <!-- footer --> */}
            <Footer />
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default App;
