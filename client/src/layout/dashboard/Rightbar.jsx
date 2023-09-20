import React, { useEffect, useState } from "react";
import { Pie, PolarArea } from "react-chartjs-2";

const Rightbar = ({ todos }) => {
  const [numberOfCompletedTodos, setNumberOfCompletedTodos] = useState(0);
  const [numberOfInprogressTodos, setNumberOfInprogressTodos] = useState(0);
  const [numberOfNotstartedTodos, setNumberOfNotstartedTodos] = useState(0);

  const handleNumberOfTodos = () => {
    const completedTodos = todos.filter((todo) => {
      if (todo.status === "completed") {
        return todo;
      }
    });
    setNumberOfCompletedTodos(completedTodos.length);

    const inprogressTodos = todos.filter((todo) => {
      if (todo.status === "in progress") {
        return todo;
      }
    });
    setNumberOfInprogressTodos(inprogressTodos.length);
    const notstartedTodos = todos.filter((todo) => {
      if (todo.status === "not started") {
        return todo;
      }
    });
    setNumberOfNotstartedTodos(notstartedTodos.length);
  };

  useEffect(() => {
    handleNumberOfTodos();
  }, [todos]);
  const PieChartdata = {
    labels: ["Completed todos", "In progress todos", "Not started todos"],
    datasets: [
      {
        data: [
          numberOfCompletedTodos,
          numberOfInprogressTodos,
          numberOfNotstartedTodos,
        ],
        backgroundColor: [
          "rgb(74 222 128)",
          "rgb(253 224 71)",
          "rgb(248 113 113 )",
        ],
        borderWidth: 0.2,
      },
    ],
  };

  return (
    <>
      {todos.length === 0 ? null : (
        <div className="w-64 fixed right-5 top-[4.7rem] bottom-3 border-[1.3px] rounded-md p-4">
          <div className="flex flex-col justify-between items-center gap-6">
            <h3 className="text-xl text-slate-700">My Stats</h3>
            <div>
              <Pie data={PieChartdata} className="w-[14rem]"></Pie>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rightbar;
