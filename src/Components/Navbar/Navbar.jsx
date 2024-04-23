import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-[#242222] bg-gradient-to-r from-[#925a11] to-[#E3B577] p-2">
       <img className="w-12 mr-2" src={logo} alt="" />
       <h1 className="text-[#242222] font-extrabold text-4xl coff">Muhammad Coffe House</h1>
    </div>
  );
};

export default Navbar;
//#925a11
//#E3B577