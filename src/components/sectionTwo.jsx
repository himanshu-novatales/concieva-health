import React from "react";
import image2 from "../assets/images/baby-care-3.avif";
import image3 from "../assets/images/baby-care-6.avif";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const SectionTwo = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-20 mt-[8%]  px-4">
        {/* Image Section */}
        <div className="w-full lg:w-[90%] xl:w-[35%] 2xl:w-[25%] relative">
          <img
            src={image2}
            className="rounded-xl object-cover w-full h-auto lg:h-[720px] xl:h-[560px]"
            alt="sectionTwo"
          />
          <div className="hidden md:block absolute xl:top-10 lg:top-[14rem] md:top-10 -z-10 left-[-40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="371"
              height="549"
              viewBox="0 0 371 549"
              fill="none"
              color="#DDEFEF"
            >
              <path
                d="M309.32 510.766C251.706 549.066 47.0925 579.537 6.63577 494.26C-33.821 408.984 117.203 -84.6883 283.266 12.6496C436.197 102.158 351.471 482.834 309.32 510.766Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
          <div className="hidden md:block absolute top-10 lg:right-[-20px] md:right-[-10px] xl:right-[-40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="85"
              viewBox="0 0 103 85"
              fill="none"
              color="#EBE6DE"
            >
              <path
                d="M18.2087 12.5895C34.4461 10.0794 50.6834 7.56926 66.9208 5.05913C71.5488 4.35316 76.1768 3.64718 80.8049 2.9412C80.5695 1.99991 80.2558 1.05863 80.0204 0.117332C61.7436 3.25499 43.7805 8.11835 26.3665 14.629C21.4247 16.5116 16.4829 18.4726 11.698 20.5905C10.1292 21.2965 11.3058 23.5713 12.7962 23.2575C34.9167 18.6295 57.0371 14.0015 79.1576 9.29498C85.4329 7.96148 91.7082 6.62798 97.9835 5.37292C97.7482 4.43162 97.4345 3.49029 97.1991 2.549C74.2158 9.13807 51.7816 17.8451 30.3671 28.4347C24.3271 31.4154 18.2871 34.6316 12.404 37.9261C10.9136 38.7889 11.9334 40.9853 13.5022 40.5931C35.7796 35.2591 57.5862 28.4347 78.9222 20.1199C84.9622 17.7666 90.9238 15.2565 96.8069 12.668C96.3363 11.8051 95.7872 10.9422 95.3165 10.1578C85.0407 15.2565 74.8434 20.3552 64.8813 25.9245C54.9977 31.4939 45.4278 37.6123 36.5639 44.672C31.5436 48.6725 26.8372 52.9868 22.4444 57.6149C21.5031 58.5562 22.4445 60.6741 23.8564 60.0465C44.4865 51.8886 64.8028 42.8679 84.7269 32.9842C90.3747 30.1604 95.9441 27.3365 101.435 24.4342C100.964 23.5713 100.415 22.7084 99.9446 21.924C87.0802 29.6113 74.1373 37.377 61.2729 45.0642C48.4085 52.7515 35.4658 60.5172 22.6014 68.2045C15.3063 72.5972 8.01127 76.9115 0.716216 81.3042C-0.931053 82.2455 0.559352 84.834 2.20662 83.8143C15.071 76.1271 28.0138 68.3614 40.8782 60.6741C53.7426 52.9868 66.6854 45.2211 79.5498 37.5339C86.8449 33.1412 94.1399 28.8269 101.435 24.4342C103.082 23.4929 101.592 20.9827 99.9446 21.924C80.4911 32.1999 60.567 41.6128 40.3291 50.2414C34.6029 52.673 28.8767 55.0263 23.072 57.3011C23.5427 58.0855 24.0133 58.9484 24.484 59.7328C32.2497 51.5749 40.9566 44.5152 50.2911 38.3183C59.7041 32.043 69.5877 26.5521 79.6282 21.2965C85.276 18.3942 91.0023 15.4918 96.7285 12.668C97.4345 12.2757 97.5913 11.3344 97.2775 10.6284C96.8853 9.84404 96.0225 9.76563 95.2381 10.0794C74.4511 19.1786 53.0366 26.7874 31.2299 32.9058C25.0331 34.6315 18.8361 36.2003 12.6393 37.6907C13.0315 38.5536 13.4237 39.4949 13.7375 40.3578C34.5244 28.67 56.2527 18.9432 78.8438 11.1775C85.1191 9.05963 91.4729 7.02017 97.8267 5.21602C99.6308 4.66693 98.9249 1.9999 97.0423 2.3921C74.9218 7.02015 52.8013 11.6482 30.6808 16.3547C24.4055 17.6882 18.1302 19.0217 11.8549 20.2768C12.2471 21.1396 12.6393 22.0809 12.9531 22.9438C29.818 15.6487 47.4673 9.9225 65.4304 5.84354C70.4506 4.74536 75.5493 3.72564 80.5696 2.86278C81.354 2.7059 81.8246 1.76461 81.5893 1.05864C81.3539 0.195783 80.5696 -0.118021 79.7852 0.0388621C63.5478 2.54899 47.3104 5.05914 31.073 7.56926C26.445 8.27524 21.817 8.98122 17.1889 9.68719C16.4045 9.84407 15.9338 10.7854 16.1691 11.4913C16.6398 12.4326 17.4243 12.6679 18.2087 12.5895Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-[90%] xl:w-[30%]  text-left">
          <p className="px-4 py-1 bg-[#EFF7F7] mx-auto xl:mx-0 w-max text-sm text-[#94857B] uppercase  rounded-[30px]">
            About The Clinic
          </p>
          {/* Heading */}
          <h3 className="hidden xl:block text-4xl md:text-5xl 2xl:text-6xl font-custom mt-5">
            Our <i>Fertility Solutions</i> for your needs
          </h3>

          <h3 className="block xl:hidden text-3xl md:text-5xl font-custom mt-5">
            Our <i>Fertility Solutions</i> for your needs
          </h3>

          {/* Description */}
          <p className="text-sm md:text-[17px] mt-6 md:mt-10 leading-relaxed">
            At Conceiva Fertility Center, we provide personalized and advanced
            fertility treatments. Our treatments are planned to meet your every
            need. We are highly dedicated and committed to be there with you at
            every stage of your fertility journey. With utmost care, we ensure
            that you feel confident at every step
          </p>

          {/* Button */}
          <div className="flex justify-center xl:justify-start">
            <button className="py-3 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mt-6 md:mt-10 px-6 lg:px-10 rounded-3xl">
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row-reverse justify-center  items-center gap-10 xl:gap-20 mt-[15%] mb-[5%] px-4">
        {/* Image Section */}
        <div className="w-full lg:w-[90%] xl:w-[35%] 2xl:w-[25%] relative">
          <img
            src={image3}
            className="rounded-xl object-cover w-full h-auto lg:h-[720px] xl:h-[580px]"
            alt="sectionTwo"
          />
          <div className="absolute hidden md:block top-[-50px] left-[-50px] -z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="467"
              height="339"
              viewBox="0 0 467 339"
              fill="none"
              color="#DDEFEF"
            >
              <path
                d="M412.057 54.8884C393.341 30.2235 369.213 10.5369 339.447 3.29583C314.868 -2.58754 288.936 0.580418 263.906 3.74839C219.258 9.40547 174.609 15.2888 129.961 20.9459C95.6858 25.2453 59.3809 30.4498 32.0959 52.173C-42.7689 112.364 29.1644 235.689 87.1169 277.551C129.285 307.873 198.963 308.552 249.023 317.151C297.956 325.523 378.909 356.977 423.332 324.845C487.147 279.135 469.108 173.914 443.852 112.364C435.96 92.4515 425.361 72.3123 412.057 54.8884Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
          <div className="absolute bottom-[-40px] hidden md:block md:right-[-10px] lg:right-[-60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="185"
              height="118"
              viewBox="0 0 185 118"
              fill="none"
              color="#EBE6DE"
            >
              <path
                d="M0.517729 118C-0.0318294 115.173 -0.110338 112.502 0.125187 109.754C1.06729 99.3869 5.62079 90.5123 11.4304 82.1874C15.5128 76.2972 20.3019 70.9567 25.1694 65.6947C31.8426 58.5479 38.7513 51.5582 45.8171 44.804C56.4942 34.5943 67.5639 24.8558 79.1831 15.7456C83.8936 12.0544 89.2322 9.5412 95.0418 8.20608C100.223 7.02803 105.248 5.53584 110.194 3.80804C113.962 2.47292 117.809 1.37341 121.813 0.66658C128.172 -0.43293 134.453 -0.118787 140.655 1.21633C146.857 2.47291 152.745 4.59341 158.477 7.26365C166.72 11.0334 174.492 15.667 182.108 20.5363C184.934 22.3426 185.562 24.0704 184.541 27.2904C183.521 30.6675 181.636 33.4948 179.595 36.3221C177.633 38.9924 175.591 41.6626 173.393 44.1758C169.311 48.8094 166.327 54.0713 163.266 59.3333C160.518 64.124 157.534 68.7577 153.923 72.9986C149.056 78.8103 143.01 83.0513 135.866 85.4074C127.387 88.2347 118.751 90.2766 110.037 92.24C103.992 93.5752 97.9466 94.5176 91.8229 94.8318C82.9515 95.303 74.3156 94.1249 65.9937 90.8264C63.7955 89.9625 61.4402 89.3342 59.0849 88.863C54.767 88.0776 50.6061 89.0201 46.4451 90.1981C34.5904 93.3396 23.7562 98.68 13.9426 106.062C9.70319 109.282 5.6993 112.817 2.00941 116.743C1.69537 117.136 1.30281 117.764 0.517729 118ZM30.1154 85.0932C30.822 85.1718 31.45 84.7005 32.0781 84.4649C36.1605 82.5015 40.0859 80.224 43.8543 77.7893C50.3705 73.6269 56.4942 68.9147 62.5393 64.124C69.3695 58.705 76.7493 54.307 85.1497 51.6367C102.108 46.2177 118.28 38.9138 133.825 30.1963C138.3 27.6831 143.01 26.5836 148.113 27.0548C153.295 27.526 158.398 28.4685 163.58 29.0968C165.464 29.3324 167.426 29.4109 169.468 29.0968C169.075 28.2329 168.526 27.8402 167.898 27.6046C166.877 27.2119 165.778 26.8192 164.679 26.6621C161.695 26.1124 158.712 25.7197 155.807 25.0129C149.37 23.4421 143.089 23.9919 136.965 26.2695C131.941 28.1543 127.309 30.746 122.677 33.4163C116.789 36.7933 110.743 39.8563 104.384 42.2124C97.397 44.7255 90.4098 47.0031 83.344 49.2806C68.3489 53.9928 55.238 61.925 43.5403 72.2133C39.7719 75.5118 36.1605 78.9674 32.4706 82.423C31.607 83.2084 30.4294 83.8367 30.1154 85.0932C30.0369 85.1718 29.7229 85.0147 29.8799 85.3288C29.9584 85.2503 30.0369 85.1718 30.1154 85.0932Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
        </div>
        {/* Text Section   #8FB4BA */}
        <div className="w-full lg:w-[90%] xl:w-[30%]  text-left">
          {/* Heading */}
          <h3 className="hidden xl:block text-4xl md:text-5xl 2xl:text-6xl font-custom mt-7">
            Experience the Best <i> Fertility Care</i>
          </h3>

          <h3 className="block xl:hidden text-3xl md:text-5xl font-custom mt-5">
            Experience the Best <i> Fertility Care</i>
          </h3>
          <p className="my-2">
            At Conceiva, we are committed to providing you with the utmost care
            and all the support you need. Explore how your fertility journey
            will be with us-
          </p>
          {/* Description */}
          <ul className="text-sm md:text-base mt-2 md:mt-4 leading-relaxed">
            <li className="py-3 border-b-2">
              <CheckCircleIcon
                sx={{
                  color: "#0065B3",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span className="font-medium">Advanced Technology:</span> Modern technologies for the best results
            </li>
            <li className="py-3 border-b-2">
              <CheckCircleIcon
                sx={{
                  color: "#0065B3",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span className="font-medium">Proven success rate</span>: Happy families
            </li>
            <li className="py-3 border-b-2">
              <CheckCircleIcon
                sx={{
                  color: "#0065B3",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span className="font-medium"> Compassionate experts</span>
            : Experienced professionals treating you like a family
            </li>
            <li className="py-3 border-b-2">
              <CheckCircleIcon
                sx={{
                  color: "#0065B3",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
                   <span className="font-medium">Personalised care</span>
             : choose your treatment according to your needs where care is 
             guaranteed
            </li>
            <li className="py-3 border-b-2">
              <CheckCircleIcon
                sx={{
                  color: "#0065B3",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />   <span className="font-medium">Supportive Environment</span>:
              Supportive Environment: our team always make you feel comfortable
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
