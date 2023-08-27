import React from "react";

const TodoCards = ({ todos }) => {
  return (
    <section className="flex flex-row justify-start gap-4 items-start">
      <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
        {todos.map((todo, index) => {
          return (
            <section key={index}>
              <div>
                <div className="bg-[#E88796] w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                  <div className="my-2 flex justify-between items-center gap-4">
                    <span className="text-lg font-bold uppercase">
                      {todo.title}
                    </span>
                  </div>
                  <div>{todo.description}</div>
                  <div className="flex justify-between items-center">
                    <div className="my-2 flex justify-between items-start flex-col">
                      <div className="text-gray-800">Created On</div>
                      <div className="text-md font-semibold">
                        {todo.createdOn}
                      </div>
                    </div>
                    <div className="my-2 flex justify-between items-start flex-col">
                      <div className="text-gray-800">Created At</div>
                      <div className="text-md font-semibold">
                        {todo.createdAt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default TodoCards;
