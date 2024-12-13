import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoArray = (props: any) => {
  const { key, data, handleAList } = props;
  return (
    <>
      <div
        key={key}
        className=" w-[18rem] md:w-[30rem] mr-[5.3rem] text-black h-[2.2rem] bg-white 
                 rounded-[12px] ml-[1rem] md:ml-0 px-[1rem] flex justify-between items-center mt-[1rem] i
                 "
      >
        <p>{data}</p>
        <div className="flex gap-[2rem]">
          <button
            className="text-[1.5rem] rounded-[50%] text-[#1cf71c] p-1 m-1 flex items-center
                   justify-center"
          >
            <FaCheckCircle />
          </button>
          <button
            className="text-[1.5rem] text-[#fe2828] rounded-[50%]  p-1 m-1 flex items-center
                   justify-center"
            onClick={() => handleAList(data)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
};
