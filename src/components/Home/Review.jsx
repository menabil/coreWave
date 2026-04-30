import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import rOne from "/src/assets/rOne.png";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="lg:py-25 py-15">
      <Container>
        <h3 className="mx-auto lg:text-center text-[#1B1B1B] font-semibold  lg:text-[45px] text-3xl lg:w-fit w-[280px] lg:leading-[54px] leading-10 lg:mb-12 mb-7">
          What our clients saying
        </h3>
        <Flex className={"lg:gap-6 gap-3 flex-col lg:flex-row "}>
          <div className="shadow-newMade lg:px-[45px] lg:py-[58px] p-5 rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 lg:text-2xl text-xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex
              className={
                "gap-x-1 text-[#FAB93C] lg:text-2xl text-xl justify-center"
              }
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="lg:w-[310px] w-[260px] text-[#7B7B7B] lg:text-base text-sm leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] lg:text-lg text-base leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="lg:text-sm text-xs text-[#7B7B7B] leading-6">
              Happy Seller
            </p>
          </div>
          <div className="shadow-newMade lg:px-[45px] lg:py-[58px] p-5 rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 lg:text-2xl text-xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex
              className={
                "gap-x-1 text-[#FAB93C] lg:text-2xl text-xl justify-center"
              }
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="lg:w-[310px] w-[260px] text-[#7B7B7B] lg:text-base text-sm leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] lg:text-lg text-base leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="lg:text-sm text-xs text-[#7B7B7B] leading-6">
              Happy Seller
            </p>
          </div>
          <div className="shadow-newMade lg:px-[45px] lg:py-[58px] p-5 rounded-[15px] text-center border-2 border-[#F1F1F1]">
            <Images imgSrc={rOne} className={"mx-auto"} />
            <h5 className="mt-4 mb-1 lg:text-2xl text-xl font-semibold leading-[30px] text-[#1B1B1B]">
              Excellent Team!
            </h5>
            <Flex
              className={
                "gap-x-1 text-[#FAB93C] lg:text-2xl text-xl justify-center"
              }
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className="lg:w-[310px] w-[260px] text-[#7B7B7B] lg:text-base text-sm leading-6 mt-5 mb-4">
              The customer service team at this company was very responsive and
              helpful when I had questions about their products.
            </p>
            <h6 className="text-[#1B1B1B] lg:text-lg text-base leading-[30px] font-semibold">
              Farhan Rio
            </h6>
            <p className="lg:text-sm text-xs text-[#7B7B7B] leading-6">
              Happy Seller
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Review;
