import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import rOne from "/src/assets/rOne.png";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="py-25">
      <Container>
        <h3 className="text-center text-[#1B1B1B] text-[45px] font-semibold leading-[54px] mb-12">
          What our clients saying
        </h3>
        <Flex className={"gap-x-6 "}>
          <div className="shadow-newMade px-[45px] py-[58px] rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 text-2xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex className={"gap-x-1 text-[#FAB93C] text-2xl justify-center"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="w-[310px] text-[#7B7B7B] text-base leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] text-lg leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="text-sm text-[#7B7B7B] leading-6">Happy Seller</p>
          </div>
          <div className="shadow-newMade px-[45px] py-[58px] rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 text-2xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex className={"gap-x-1 text-[#FAB93C] text-2xl justify-center"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="w-[310px] text-[#7B7B7B] text-base leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] text-lg leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="text-sm text-[#7B7B7B] leading-6">Happy Seller</p>
          </div>
          <div className="shadow-newMade px-[45px] py-[58px] rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 text-2xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex className={"gap-x-1 text-[#FAB93C] text-2xl justify-center"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="w-[310px] text-[#7B7B7B] text-base leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] text-lg leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="text-sm text-[#7B7B7B] leading-6">Happy Seller</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Review;
