import { useState } from "react";
const Title = () => {
  const [active, setActive] = useState();

  return (
    <div className="flex flex-col items-center  text-black mt-[10rem] ">
      <p className="font-bold text-[2rem] ">Gather URLs for your future use.</p>
      <div
        onClick={() => setActive(true)}
        className={`rounded-full w-[400px]  h-[35px]  flex items-center pl-[1rem] bg-gray-100 mt-[20px] ${
          active ? "border-[2px] border-orange-300" : "border-none"
        }`}
      >
        <i className="bi bi-search text-sm"></i>
        <input
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Search your Linkboard "
          className="rounded-full h-[25px] w-[100%] text-black px-[1rem] bg-transparent border-transparent outline-none text-[12px]"
        />
      </div>
    </div>
  );
};

export default Title;
