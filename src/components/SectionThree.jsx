import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const SectionThree = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  const data = [
    { age: "> 35", value: 87 },
    { age: "35-37", value: 60 },
    { age: "38-39", value: 50 },
    { age: "40-42", value: 40 },
    { age: "43-45", value: 43 },
    { age: "45 <", value: 48 },
  ];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 50], [0, -150]);

  return (
    <div className="flex flex-col items-center mt-[10%] relative">
      <p className="px-4 py-1 mb-10 bg-[#EFF7F7] w-52 text-sm text-[#94857B] font-bold rounded-[30px]">
        Outstanding Success Rates
      </p>
      <h3 className="hidden xl:block text-4xl md:text-5xl 2xl:text-6xl font-custom mt-5">
      Certifications & Accreditations
      </h3>
      <h3 className="block xl:hidden text-3xl text-center font-medium  font-custom mt-5">
      Certifications & Accreditations
      </h3>
      <div className="flex flex-col lg:flex-row gap-0 p-5 md:mb-5 mt-5">
        {/* Text Section */}
        <div className="text-center flex flex-col sm:flex-row gap-2 items-center">
          <div className="text-left w-full lg:w-72">
            <h1 className="text-8xl font-custom my-5 text-[#0065B3]">52%</h1>
            <h1 className="text-[21px]">Live birth rate for PGS treatment</h1>
            <h3>All ages average</h3>
          </div>
          <div className="text-left w-full mr-3">
            <h1 className="text-8xl font-custom my-5 text-[#0065B3]">35%</h1>
            <h1 className="text-[18px]">
              Live birth rates for IVF/IMSI/ICSI/PIMSI treatment
            </h1>
            <h3>All ages average</h3>
          </div>
        </div>
        {/* Progress Bars */}
        <div
          ref={sectionRef}
          className="border-2 text-center w-full flex flex-col md:flex-row lg:mt-0 mt-5 gap-2 p-3 border-[#EBE6DE] rounded-lg bg-[#FBF9F6]"
        >
          <div className="text-left">
            <h3>Live birth rates for egg recipient treatment</h3>
            <p className="text-xs">by age group</p>
          </div>
          <div className="w-full max-w-lg mx-auto flex flex-col gap-[6px] mt-2">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ width: "0%" }}
                animate={
                  isInView ? { width: `${item.value}%` } : { width: "0%" }
                }
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-[#0065B3] text-white px-4 flex justify-between"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {item.age}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {item.value}%
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        style={{ y }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute text-[#8cbfe665] bottom-[2%] p-8 xl:left-[-60px] lg:left-[-120px] lg:top-1 xl:top-[3rem] md:left-[-100px] md:bottom-[-8rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="479"
          height="362"
          viewBox="0 0 479 362"
          fill="none"
          className=" hidden md:block xl:w-[350px] xl:h-[300px] lg:w-[280px] lg:h-[250px] md:w-[200px] md:h-[150px]"
        >
          <path
            d="M247.612 360.478C246.792 359.658 246.177 358.428 245.767 357.197C237.568 342.025 228.959 327.057 221.375 311.474C216.251 301.017 211.536 290.15 208.462 279.078C204.772 264.521 205.797 249.963 212.971 236.226C217.686 226.999 221.58 217.362 230.804 211.006C212.561 190.707 194.728 171.229 176.895 151.545C176.485 151.75 176.075 151.955 175.46 152.16C176.485 155.851 177.92 159.542 178.535 163.437C179.765 170.204 180.995 176.97 181.2 183.736C181.61 198.294 179.97 212.646 175.87 226.589C173.82 233.355 173.001 240.531 171.771 247.503C171.566 248.938 171.156 250.578 170.541 251.808C169.106 254.474 166.236 254.679 164.187 252.423C163.777 251.808 163.367 251.193 162.957 250.578C154.758 232.535 145.329 214.902 142.254 195.013C139.999 180.661 138.974 166.308 144.509 152.16C147.993 143.549 150.453 134.527 153.733 124.48C149.428 119.97 144.714 114.229 139.384 109.513C135.9 106.437 132.62 103.772 130.57 99.4659C130.16 98.4407 128.726 97.8256 127.701 97.0055C117.452 86.7536 107.408 76.2968 96.954 66.0449C95.1093 64.1996 92.4445 62.9693 90.3948 61.3291C89.9848 60.7139 89.3698 60.3039 88.9599 59.6888C88.5499 59.4837 88.14 59.2787 87.7301 59.0737C87.9351 59.2787 88.3449 59.6888 88.5499 59.8938C88.9599 60.5089 89.3699 61.124 89.7798 61.7392C90.1898 62.9694 90.3947 64.1996 91.0097 65.2248C99.6187 80.6025 107.203 96.1853 110.073 113.819C110.482 116.279 111.712 118.534 112.327 120.995C114.992 143.549 114.992 166.513 121.961 188.452C122.166 189.477 122.576 190.502 122.576 191.322C122.781 194.808 120.321 196.653 117.247 195.013C113.352 192.758 109.458 190.297 105.973 187.222C98.3888 180.455 91.0097 173.484 83.6305 166.718C75.6364 154.621 66.6174 143.139 60.0582 130.221C50.8342 111.973 45.5048 92.2896 46.7346 71.3759C47.3496 59.8938 46.5296 48.0017 51.0391 36.9297C51.654 35.2894 52.269 33.6491 52.884 32.0088C36.2808 20.7318 18.8578 12.3253 -0.000134101 6.37919C0.40982 4.32882 0.614797 2.27844 1.02475 0.433105C4.09941 1.04822 7.17404 1.25325 9.83875 2.48347C35.2559 12.5303 59.0332 25.6526 80.1459 42.8757C90.5997 51.4873 100.439 60.5089 110.482 69.5305C117.247 75.6816 123.601 82.2428 129.955 88.599C132.005 91.0594 134.055 93.7249 135.285 95.1601C149.428 93.3148 162.137 91.0594 175.05 90.2393C186.939 89.4191 198.008 93.1098 209.282 96.8005C217.481 99.4659 225.885 101.721 234.084 103.772C255.811 109.103 277.539 114.229 299.471 119.149C306.236 120.79 313 121.61 319.764 123.045C324.069 124.07 330.013 124.48 330.423 130.016C330.628 135.552 324.889 137.603 320.379 138.833C307.466 142.524 294.552 146.214 280.819 146.624C273.029 146.829 265.035 147.24 257.246 147.855C236.749 149.495 217.276 145.394 198.623 137.193C187.554 132.272 176.485 127.146 165.416 122.02C164.596 121.61 163.572 121.61 160.702 120.79C171.976 136.578 184.479 148.88 195.753 162.207C207.232 175.74 219.53 188.657 231.829 201.369C244.333 214.082 258.476 224.538 272.824 235.2C276.309 229.664 279.179 224.743 282.458 220.028C286.353 214.492 291.682 210.801 298.037 208.135C313.41 201.574 329.603 198.499 346.206 197.269C360.555 196.243 375.108 195.833 389.457 195.218C394.991 195.013 397.861 199.524 395.196 204.445C394.171 206.29 392.326 207.93 390.481 209.366C372.238 222.693 353.176 234.79 332.268 244.017C327.348 246.067 322.224 247.298 317.099 248.938C312.385 250.373 307.466 251.603 302.751 253.039C302.751 253.654 302.751 254.269 302.751 254.679C308.9 257.549 315.255 260.01 321.199 263.085C326.938 266.161 332.268 266.571 338.622 264.521C351.126 260.625 364.244 261.855 377.158 262.265C383.717 262.47 390.481 262.265 396.836 263.085C417.128 265.751 434.141 276.003 449.72 288.51C458.534 295.481 466.323 303.478 474.522 311.064C475.547 311.884 476.367 312.909 476.982 313.935C479.236 317.42 478.007 320.291 473.907 321.316C472.472 321.726 470.832 321.931 469.398 321.726C453.614 321.521 437.831 321.316 422.458 317.83C408.314 314.755 394.171 311.884 380.027 308.809C362.604 305.118 347.026 297.532 334.113 285.024C331.448 282.359 329.193 279.078 327.758 275.798C326.528 272.722 325.094 271.082 321.814 271.697C321.609 272.107 321.199 272.722 321.404 273.132C328.578 287.485 331.858 302.657 333.703 318.445C334.728 328.287 336.162 338.129 337.597 347.971C337.802 350.226 339.032 352.892 336.162 353.917C334.728 354.327 332.268 353.097 331.038 351.661C318.739 337.719 307.056 323.366 300.086 305.733C294.757 291.996 294.552 278.463 298.447 264.726C298.857 263.495 299.061 262.265 299.676 260.625C296.192 258.37 292.707 256.114 289.223 254.269C279.794 249.143 270.98 243.402 262.986 236.226C260.526 233.97 257.656 232.535 254.991 230.484C254.581 230.074 253.967 229.664 253.557 229.459C253.557 230.279 253.557 230.895 253.352 231.715C263.191 259.805 260.936 288.305 257.041 316.805C255.196 329.722 252.737 342.435 253.762 355.352C253.762 356.377 253.967 357.607 253.557 358.427C252.942 359.658 252.122 361.093 250.892 361.503C250.072 362.323 248.432 361.298 247.612 360.478ZM159.267 121.405C159.882 120.995 160.497 120.38 161.317 119.97C159.882 118.124 158.447 116.689 154.143 117.099C156.602 119.149 157.832 120.38 159.267 121.405Z"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </motion.div>
    </div>
  );
};

export default SectionThree;
