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
    <div className="mt-25">
      <Container className={"pb-10"}>
        <div className="">
          <Images imgSrc={fLogo} />
          <p>mukimsdesign@gmail.com</p>
          <p>+88 01767630044</p>
          <Flex className={"gap-x-2"}>
            <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative">
              <FaFacebookF className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
            </div>
            <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative">
              <FaTwitter className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
            </div>
            <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative">
              <FaLinkedinIn className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
            </div>
            <div className="rounded-full bg-[#06C279] h-7 w-7 text-white relative">
              <FaBehance className="absulate top-1/2 left-1/2  translate-x-1/3 translate-y-[40%]" />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
