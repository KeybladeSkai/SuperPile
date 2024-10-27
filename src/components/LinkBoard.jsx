import Link from "./Link";
const LinkBoard = () => {
  return (
    <div className="min-h-[100vh] mt-[80px] mx-[50px]">
      <h2 className="font-bold text-[16px]">Your Linkboard</h2>
      <p className="text-[15px] mt-[10px] mb-[20px] text-gray-500">All your links neatly gathered in one convenient place for quick and easy access whenever you need them.</p>
      <Link />
    </div>
  );
};

export default LinkBoard;
