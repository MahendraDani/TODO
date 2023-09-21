import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

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
    labels: ["Completed", "Ongoing", "Not started"],
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
        borderWidth: 0,
      },
    ],
  };
  const options = {
    labels: {
      position: "bottom",
    },
  };
  return (
    <>
      {todos.length === 0 ? null : (
        <div className="w-64 bg-slate-50 fixed right-5 top-[4.7rem] bottom-3 border-[1.3px] border-slate-200 rounded-sm p-4">
          <div className="flex flex-col justify-between items-center gap-6">
            <h3 className="text-xl text-slate-700 z-30">My Stats</h3>
            <Pie data={PieChartdata} options={options} />
          </div>
        </div>
      )}
    </>
  );
};

export default Rightbar;
