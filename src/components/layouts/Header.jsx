import Container from "../common/Container";

const Header = () => {
  return (
    <div className="bg-[#eefff9]">
      <Container className={"py-6.5"}>
        <div className="flex items-center justify-between">
          <img src="/src/assets/logo.png" alt="aaa" />
          <div className="flex">
            <ul className="flex gap-x-[45px] items-center">
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                About
              </li>
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                Portfolio
              </li>
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                Blog
              </li>
              <li className="cursor-pointer hover:text-[#06C279] duration-300 font-medium ">
                Testimonial
              </li>
            </ul>
            <button className="rounded-[5px] bg-[#06C279] py-3.5 px-6 text-white ml-[142px] font-semibold cursor-pointer   hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
              Register
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
