import thunder from "../assets/thunder.png";
import { useContext } from "react";
import { SuperPileContext } from "../context/SuperPileContext";

const Header = () => {
  const { LinkBoardPanel, setLinkBoardPanelToggle } =
    useContext(SuperPileContext);
  console.log(LinkBoardPanel);
  return (
    <div className="flex justify-between px-[3rem] pt-[.2rem] items-center fixed w-[100%] bg-white top-0 left-0">
      <div className="flex gap-[.7rem] py-[.8rem] font-Monsterrat font-bold text-[1rem]">
        <img src={thunder} width={20} />
        <h1>SUPERPILE</h1>
      </div>
      <button
        onClick={setLinkBoardPanelToggle}
        className=" font-Monsterrat text-[.8rem] border-[1px] border-black w-[90px] h-[35px] rounded-lg "
      >
        Add a Link
      </button>
    </div>
  );
};

export default Header;
