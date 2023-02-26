import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {/* <!-- todo item --> */}
        <TodoItem />
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default TodoList;
