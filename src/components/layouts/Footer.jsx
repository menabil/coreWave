import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import fLogo from "/src/assets/flogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import Button from "../common/Button";

const Footer = () => {
  return (
    <div className="mt-25">
      <Container>
        <Flex className={"items-start gap-x-[195px] mb-10.5"}>
          <div className="">
            <Images imgSrc={fLogo} />
            <p className="text-sm text-[#7B7B7B] leading-5.5 mt-6.5">mukimsdesign@gmail.com</p>
            <p className="text-sm text-[#7B7B7B] leading-5.5 mb-5">+88 01767630044</p>
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
          <div className="">
            <h6 className="text-xl text-[#1B1B1B] mb-6.5 leading-7.5 font-semibold">Services</h6>
            <Flex className={"flex-col text-sm text-[#7B7B7B] gap-y-2 items-start"}>
              <p>Web Design</p>
              <p>Web Development</p>
              <p>SEO Marketing</p>
              <p>UI/UX Analysis</p>
              <p>Digital Marketing</p>
            </Flex>
          </div>
          <div className="">
            <h6 className="text-xl text-[#1B1B1B] mb-6.5 leading-7.5 font-semibold">Help</h6>
            <Flex className={"flex-col text-sm text-[#7B7B7B] gap-y-2 items-start"}>
              <p>Account</p>
              <p>Support Center</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </Flex>
          </div>
          <div className="">
            <h6 className="text-xl text-[#1B1B1B] mb-6.5 leading-7.5 font-semibold">Contact Us</h6>
            <input type="text" />
            <Button btnText={"Request & Callback"} />
          </div>
        </Flex>
        <div className="border-t-2 border-[#E0E0E0] text-center w-full text-sm font-medium text-[#7B7B7B] leading-5.5 py-4">
          @2023 CoreWave. All copyrights reserved
        </div>
      </Container>
    </div>
  );
};

export default Footer;
