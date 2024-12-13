import React, { useEffect, useState } from "react";
import { TodoDateTime } from "./TodoDateTime";
import { TodoArray } from "./TodoArray";

const TodoFile = () => {
  const [dataCon, setDataCon] = useState("");
  const [error, setError] = useState("");
  const [task, setTask] = useState([]);
  const [empty, setEmpty] = useState("");

  const handleChange = (value: any) => {
    setDataCon(value);
  };

  const dataSubmit = (event: any) => {
    event.preventDefault();

    if (!dataCon) {
      setEmpty("Please fill this section.");
      return;
    }

    if (task.includes(dataCon)) {
      setDataCon("");
      setError("Task already exist");
      return;
    }

    setTask((prevData: string) => [...prevData, dataCon]);

    setDataCon("");
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (empty) {
      const timer = setTimeout(() => setEmpty(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [empty]);

  // clear each data
  const clearAList = (value: any) => {
    const updateData = task.filter((curTask) => {
      return curTask !== value;
    });
    setTask(updateData);
  };
  // Clear all Todo
  const clearAllTodo = () => {
    setTask([]);
  };
  return (
    <>
      <div className="flex items-center h-[100vh] flex-col justify-start text-white p-[2rem] bg-slate-800">
        <header>
          <h1 className="text-[3rem] font-[800] tracking-[2px]">TODO LIST</h1>
          <TodoDateTime />
        </header>
        <section>
          <form className="flex px-1" onSubmit={dataSubmit}>
            <input
              className="w-[15rem] md:w-[30rem] h-[2.2rem] rounded-[12px]
              pl-2 md:pl-7 pt-1 text-[1.2rem] text-black "
              type="text"
              value={dataCon}
              onChange={(event) => handleChange(event.target.value)}
            />
            <button
              className="w-[5rem] h-[2.2rem]  z-20 ml-[1rem] rounded-[12px]
            font-[700]  bg-yellow-400 text-[1.3rem] text-black"
            >
              ADD
            </button>
          </form>
          <div>
            {error && (
              <p className="text-[#fe2828] text-[1rem] mt-[0.4rem]">{error}</p>
            )}
          </div>
          <div>
            {empty && (
              <p className="text-[#fe2828] text-[1rem] mt-[0.4rem]">{empty}</p>
            )}
          </div>
        </section>
        <section>
          <div className="mt-[2rem]">
            {task.map((curData, index) => {
              return (
                <TodoArray
                  key={index}
                  data={curData}
                  handleAList={clearAList}
                />
              );
            })}
          </div>
        </section>
        <section className="pt-[1.5rem]">
          <button
            className="px-4 py-1 rounded-[12px] bg-yellow-400 font-[900]
         text-black"
            onClick={clearAllTodo}
          >
            CLEAR ALL
          </button>
        </section>
      </div>
    </>
  );
};

export default TodoFile;
