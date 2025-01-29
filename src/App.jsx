import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";

function App() {

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto bg-gray-400 p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;