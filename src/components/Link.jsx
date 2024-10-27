import anime from "../assets/Images/anime.jpeg";
const Link = () => {
  return (
    <div className="border-[1px] border-slate-300 w-[300px] h-[310px] rounded-xl overflow-clip">
      <img src={anime} />
      <div className="p-[.7rem] flex flex-col gap-[6px]">
        <h2 className="font-bold text-[1rem]">BlinkShot</h2>
        <p className="text-gray-500 text-[.8rem]">
          A realtime AI image playground built with Flux Schnell on Together AI
        </p>
        <div className="flex gap-[.6rem] mt-[5px]">
          <button className="w-[30%] rounded-full border-[1px] border-gray-500 hover:bg-gray-100  hover:border-orange-300 hover:text-black h-[1.8rem] text-[.8rem]">
            Copy
          </button>
          <button className="w-[30%] rounded-full border-[1px] h-[1.8rem] text-[.8rem] border-gray-500 hover:bg-gray-100  hover:border-orange-300  hover:text-black">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Link;