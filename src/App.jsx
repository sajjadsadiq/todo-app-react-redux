import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
