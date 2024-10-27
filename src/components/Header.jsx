import thunder from "../assets/thunder.png";
const Header = () => {
  return (
    <div className="flex justify-between px-[3rem] py-[.5rem] items-center fixed w-[100%] bg-white top-0">
      <div className="flex gap-[.7rem] py-[.8rem] font-Monsterrat font-bold text-[1rem]">
        <img src={thunder} width={20} />
        <h1>SUPERPILE</h1>
      </div>
      <button className=" font-Monsterrat text-[.8rem] border-[1px] border-black w-[90px] h-[35px] rounded-lg "> Add a Link</button>
    </div>
  );
};

export default Header;
