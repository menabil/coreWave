import { CgMenuRightAlt } from "react-icons/cg";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  let handelClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-[#eefff9]">
      <Container className={"py-6.5 relative"}>
        <Flex className="justify-between">
          <img src="/src/assets/logo.png" alt="aaa" />
          <div className="lg:block hidden">
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
              <button className="rounded-[5px] bg-[#06C279] py-3.5 px-6 text-white ml-[142px] font-semibold cursor-pointer   hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
                Register
              </button>
            </ul>
          </div>
          {show && (
            <div className="absolute bg-[#DAF6EB] top-10 text-center w-[250px] py-5 rounded-[10px] z-100">
              <ul className="flex flex-col gap-y-5 items-center ">
                <li className="cursor-pointer duration-300 font-medium ">
                  Home
                </li>
                <li className="cursor-pointer duration-300 font-medium ">
                  About
                </li>
                <li className="cursor-pointer duration-300 font-medium ">
                  Portfolio
                </li>
                <li className="cursor-pointer duration-300 font-medium ">
                  Services
                </li>
                <li className="cursor-pointer duration-300 font-medium ">
                  Blog
                </li>
                <li className="cursor-pointer duration-300 font-medium ">
                  Testimonial
                </li>
              </ul>
              <button className="rounded-[5px] bg-[#06C279] py-2.5 px-6 text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300 w-fit mt-5">
                Register
              </button>
            </div>
          )}
          <CgMenuRightAlt
            className="text-[#06C279] text-3xl lg:hidden block"
            onClick={handelClick}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
