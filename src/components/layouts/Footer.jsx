import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import fLogo from "/src/assets/flogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:mt-25 mt-10">
      <Container>
        <Flex
          className={
            "items-start gap-x-[195px] mb-10.5 flex-col-reverse lg:flex-row"
          }
        >
          <div className="mx-auto">
            <Images imgSrc={fLogo} />
            <p className="text-sm text-[#7B7B7B] leading-5.5 mt-6.5">
              mukimsdesign@gmail.com
            </p>
            <p className="text-sm text-[#7B7B7B] leading-5.5 mb-5">
              +88 01767630044
            </p>
            <Flex className={"gap-x-2"}>
              <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative cursor-pointer">
                <FaFacebookF className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
              </div>
              <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative cursor-pointer">
                <FaTwitter className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
              </div>
              <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative cursor-pointer">
                <FaLinkedinIn className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
              </div>
              <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative cursor-pointer">
                <FaBehance className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
              </div>
            </Flex>
          </div>
          <div className="hidden md:block">
            <h6 className="text-xl text-[#1B1B1B] mb-6.5 leading-7.5 font-semibold">
              Services
            </h6>
            <Flex
              className={"flex-col text-sm text-[#7B7B7B] gap-y-2 items-start"}
            >
              <p>Web Design</p>
              <p>Web Development</p>
              <p>SEO Marketing</p>
              <p>UI/UX Analysis</p>
              <p>Digital Marketing</p>
            </Flex>
          </div>
          <div className="hidden md:block">
            <h6 className="text-xl text-[#1B1B1B] mb-6.5 leading-7.5 font-semibold">
              Help
            </h6>
            <Flex
              className={"flex-col text-sm text-[#7B7B7B] gap-y-2 items-start"}
            >
              <p>Account</p>
              <p>Support Center</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </Flex>
          </div>
          <div className="lg:pb-0 pb-10 lg:text-left text-center">
            <h6 className="text-xl text-[#1B1B1B] leading-7.5 font-semibold">
              Contact Us
            </h6>
            <input
              type="email"
              placeholder="Enter your mail"
              className="px-4 py-3 lg:w-[337px] w-[270px] border-2 border-[#DDDDDD] rounded-[5px] lg:mt-7.5 my-3 lg:mb-3.5 outline-none placeholder:text-[#BDBDBD]"
            />
            <button className="rounded-[5px] bg-[#06C279] lg:py-3.5 lg:px-6 px-3 py-2 text-white font-semibold cursor-pointer hover:bg-[#DAF6EB] duration-300 lg:text-base text-sm hover:text-[#06C279]">
              Request & Callback
            </button>
          </div>
        </Flex>
        <div className="border-t-2 border-[#E0E0E0] text-center w-full lg:text-sm text-xs font-medium text-[#7B7B7B] leading-5.5 py-4">
          @2026 CoreWave. All copyrights reserved
        </div>
      </Container>
    </div>
  );
};

export default Footer;
