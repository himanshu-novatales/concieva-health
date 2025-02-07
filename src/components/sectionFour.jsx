import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import service1 from "../assets/images/baby-care-2.jpg";
import service2 from "../assets/images/baby-care-4.avif";
import service3 from "../assets/images/baby-care-1.jpg";
import service4 from "../assets/images/baby-care-8.avif";
import service5 from "../assets/images/baby-care-9.avif";
import service6 from "../assets/images/baby-care-10.avif";
import service7 from "../assets/images/baby-care-11.avif";
import service8 from "../assets/images/baby-care-16.avif";
import { motion, useScroll, useTransform } from "framer-motion";
const SectionFour = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);
  const services = [
    {
      icon: LocalHospitalIcon,
      image: service1,
      title: "IUI",
      description:
        "Intrauterine Insemination is a procedure to improve fertility by artificially placing sperms in the uterus ",
    },
    {
      icon: LocalHospitalIcon,
      image: service2,
      title: "IVF",
      description:
        "The process involves the fertilization of the egg outside the female body and the transplanting of the embryo back into the uterus. ",
    },
    {
      icon: LocalHospitalIcon,
      image: service3,
      title: "ICSI",
      description:
        "The process involves injecting a single sperm into an egg outside the body.",
    },
    {
      icon: LocalHospitalIcon,
      image: service4,
      title: "PICSI",
      description: " more advanced process of using ICSI. ",
    },
    {
      icon: LocalHospitalIcon,
      image: service5,
      title: "Egg Freezing",
      description:
        " Process of retrieving and freezing the women’s eggs for utilisation in the future.",
    },
    {
      icon: LocalHospitalIcon,
      image: service6,
      title: "Blastocyst Culture",
      description:
        "A process where embryos are cultivated for a long period and transferred to the most capable embryo",
    },
    {
      icon: LocalHospitalIcon,
      image: service7,
      title: "Female Fertility",
      description:
        "Improve the fertility rate with proven tests and treatment designs especially for female reproductive health ",
    },
    {
      icon: LocalHospitalIcon,
      image: service8,
      title: "Male Fertility",
      description:
        "Complete diagnosis for males to detect fertility issues with proven tests and treatment options.",
    },
  ];
  return (
    <div className="flex justify-center items-center relative lg:mt-20 md:mt-10 mt-10 mb-5 2xl:mb-20 ">
      <motion.div
        style={{ y }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute text-[#8cbfe665] md:top-[35%] lg:top-[45%] p-8 xl:left-[-60px] lg:left-[-120px] md:left-[-120px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="371"
          height="241"
          viewBox="0 0 371 241"
          fill="#ddffff"
          className=" hidden md:block xl:w-[350px] xl:h-[300px] lg:w-[400px] lg:h-[250px] md:w-[400px] md:h-[250px]"
        >
          <path
            d="M370.188 68.7537L366.695 69.23C344.94 72.4057 324.138 85.7435 309.847 105.592C298.414 121.47 290.633 141.318 286.029 166.406C278.883 139.413 269.832 116.071 255.699 89.078C239.979 58.7503 213.62 39.6962 181.385 35.2502L178.368 34.9327L180.75 36.6793C192.818 45.4124 198.376 60.1793 201.869 72.0881C202.504 74.4699 203.139 76.6929 203.775 79.0746C206.792 90.1895 209.967 101.622 216.795 111.467C220.448 116.865 225.529 121.311 230.293 125.598C235.85 130.521 240.932 135.125 244.425 141C251.094 152.433 251.888 169.582 246.172 180.538C238.232 175.933 233.945 168.946 229.34 161.642C227.434 158.467 225.37 155.132 222.988 151.956C212.349 137.825 202.028 126.551 191.23 117.659C181.703 109.72 171.064 102.892 160.742 96.2233L156.614 93.524C139.623 82.5679 124.855 73.0408 104.848 71.6118C81.3464 69.8652 58.1629 71.6118 35.7733 76.3753L33.709 76.8517L35.6145 77.8043C46.5711 83.3618 54.987 93.3652 63.2442 102.892C72.6129 113.848 82.458 125.281 95.9552 130.044C102.783 132.426 109.929 132.902 116.916 133.379C125.649 133.855 133.906 134.49 141.528 138.301C146.292 140.683 150.421 144.335 154.39 147.828C158.995 151.798 163.6 155.926 169.158 158.308C172.493 159.737 175.986 160.531 179.48 161.325C182.973 162.119 186.625 162.913 189.96 164.5C198.693 168.47 205.045 177.68 205.521 186.889C202.981 187.683 185.831 185.142 174.398 183.396C165.188 181.967 157.249 180.855 155.184 180.855C144.545 181.49 134.065 183.237 123.903 184.984L123.585 185.46C120.568 185.936 117.233 186.254 113.899 186.571C107.388 187.048 100.56 187.683 95.1613 190.065C90.08 192.288 84.8398 195.622 79.4409 200.386C71.3426 207.372 64.0382 215.946 57.6865 223.568C56.7337 224.838 55.6222 225.95 54.6695 227.061L52.2876 229.919L55.6222 228.332C64.3558 223.886 75.3123 226.426 86.7453 229.602L90.0799 230.555C105.641 235.001 119.139 238.811 133.112 229.761L135.653 228.014C145.975 221.028 154.073 215.629 168.682 216.423C180.273 217.217 191.389 221.663 202.187 225.95C209.491 228.808 217.113 231.825 224.735 233.73C233.627 235.794 242.52 236.588 251.253 237.224C259.828 237.859 268.72 238.494 277.771 240.558L278.089 240.717L278.407 240.399C288.252 231.984 294.445 220.075 300.479 208.801C304.607 200.862 308.895 192.605 314.452 185.46C318.581 180.061 323.662 175.298 328.585 170.534C337.794 161.642 347.481 152.433 351.451 139.889C354.15 131.315 353.991 121.946 353.832 112.896C353.832 109.561 353.674 106.068 353.832 102.575C354.15 91.7774 356.691 77.4868 367.33 70.9766L370.188 68.7537ZM354.15 87.9665C352.88 92.8888 352.403 97.8111 352.245 102.416C352.086 105.909 352.245 109.402 352.245 112.737C352.403 121.629 352.562 130.997 349.863 139.254C346.052 151.48 337.001 160.054 327.473 169.264C322.551 174.027 317.469 178.95 313.182 184.348C307.465 191.494 303.178 199.751 299.049 207.849C293.174 218.963 287.14 230.555 277.613 238.811C268.72 236.747 259.828 236.112 251.253 235.477C242.679 234.842 233.627 234.207 225.053 232.142C217.431 230.237 209.967 227.22 202.663 224.362C191.865 220.075 180.591 215.47 168.84 214.835C153.755 213.882 145.339 219.44 134.859 226.585L132.318 228.332C118.821 236.906 105.642 233.254 90.3975 228.808L87.0629 227.855C76.5827 224.997 66.42 222.615 57.8453 225.474C58.1629 225.156 58.4805 224.68 58.7981 224.203C65.1497 216.582 72.4541 208.007 80.3936 201.18C85.7926 196.575 90.8739 193.24 95.7964 191.176C101.037 188.953 107.706 188.477 114.057 187.842C117.551 187.524 120.885 187.207 123.903 186.73L124.696 186.571C134.859 184.825 145.339 183.078 155.82 182.443C157.725 182.284 165.982 183.555 174.716 184.825C196.47 188.159 205.68 189.271 207.109 188C207.268 187.842 207.427 187.524 207.427 187.207C207.109 177.362 200.281 167.517 191.071 163.23C187.578 161.642 183.926 160.69 180.273 159.896C176.939 159.102 173.445 158.308 170.27 156.879C164.871 154.497 160.266 150.527 155.82 146.558C151.691 142.906 147.562 139.254 142.64 136.713C134.7 132.585 125.967 132.109 117.551 131.632C110.723 131.156 103.577 130.838 96.908 128.456C83.7283 123.852 74.6772 113.213 64.8321 101.781C57.0513 92.5713 48.953 83.203 38.6315 77.328C60.2272 72.882 82.6167 71.453 105.324 73.0408C124.855 74.4699 139.464 83.8381 156.296 94.7942L160.425 97.4936C170.587 104.004 181.226 110.831 190.754 118.771C201.393 127.663 211.714 138.777 222.194 152.909C224.576 155.926 226.482 159.261 228.546 162.436C233.31 170.217 237.915 177.521 246.49 182.284L247.125 182.602L247.442 181.967C253.794 170.693 253 152.274 246.013 140.365C242.361 134.331 236.962 129.409 231.563 124.646C226.799 120.358 221.877 116.071 218.225 110.831C211.555 101.304 208.38 89.8719 205.362 78.9158C204.727 76.5341 204.092 74.1523 203.298 71.9293C199.964 60.4969 194.723 46.5239 183.926 37.4732C214.255 42.3955 239.185 60.9732 254.27 90.0307C268.72 117.977 278.089 142.112 285.235 170.375L286.029 173.71L286.664 170.217C291.269 143.859 299.049 123.058 310.8 106.703C324.139 88.1253 343.193 75.4226 363.519 71.453C358.596 75.5814 355.738 81.6152 354.15 87.9665Z"
            fill="currentColor"
          ></path>
          <path
            d="M172.017 104.956C166.459 94.318 161.695 83.3619 157.408 72.247C153.12 60.8145 149.309 49.0645 145.816 37.3145C143.911 30.8044 142.164 24.2942 140.576 17.784C140.894 17.784 141.211 17.784 141.529 17.784C136.924 33.98 135.018 50.9699 135.018 67.801C135.018 72.5645 135.177 77.3281 135.653 82.0916C135.653 82.7267 134.542 82.7267 134.542 82.0916C134.065 73.676 134.065 65.1017 134.542 56.6861C135.018 48.2706 136.13 40.0138 137.559 31.7571C138.353 26.9935 139.464 22.23 140.576 17.6252C140.735 17.1489 141.37 17.1489 141.529 17.6252C144.863 29.0577 148.198 40.649 151.85 52.0814C155.502 63.6726 159.631 75.1051 164.236 86.22C166.777 92.4126 169.635 98.6051 172.652 104.48C173.128 104.956 172.334 105.433 172.017 104.956Z"
            fill="currentColor"
          ></path>
          <path
            d="M136.289 49.0644C124.697 35.5677 108.977 26.517 92.4622 20.1656C83.8875 16.8312 75.1539 14.2906 66.2616 12.0676C56.2578 9.5271 46.0951 7.30412 35.7737 5.71628C24.1819 3.81088 12.5901 2.69943 0.839586 1.58794C0.839586 1.11159 0.998338 0.635194 0.998338 0.158842C15.1308 2.85817 27.5165 10.6386 38.1556 20.0068C49.1122 29.6927 58.322 41.2839 67.8495 52.3988C73.2484 58.7502 78.8062 65.1015 84.8402 70.8178C85.4754 71.4529 84.5226 72.2468 83.8875 71.7705C73.2484 61.6083 64.1973 50.0171 54.5111 38.9022C45.1424 28.1049 34.9797 17.6251 22.594 10.1623C15.7659 6.03388 8.30276 3.01698 0.521983 1.42914C-0.271974 1.27036 -0.113172 9.68043e-05 0.680785 9.68043e-05C11.161 0.476449 21.6412 1.74668 31.9627 3.33452C42.2841 4.92236 52.6055 6.9866 62.927 9.52714C80.7116 13.9731 98.4963 19.5305 114.217 29.0576C122.633 34.1387 130.572 40.49 136.765 48.2704C137.083 48.9056 136.606 49.5407 136.289 49.0644Z"
            fill="currentColor"
          ></path>
          <path
            d="M10.5273 1.58777C29.4235 6.35129 47.8433 13.3378 64.9928 22.706C82.1423 31.9155 98.1802 43.1892 112.471 56.3682C120.411 63.8311 128.033 71.7703 134.702 80.3446C135.179 80.9798 134.226 81.7737 133.749 81.1386C127.557 73.6757 121.046 66.5304 114.059 59.7027C107.073 52.875 99.6093 46.5236 91.8285 40.8074C76.4258 29.2162 59.4351 19.6891 41.6505 12.3851C31.4878 8.25668 21.1664 4.76344 10.5273 2.2229C9.89217 2.2229 10.051 1.58777 10.5273 1.58777Z"
            fill="currentColor"
          ></path>
          <path
            d="M37.0426 76.8516C56.8916 80.6624 76.7405 84.632 96.2718 90.0306C115.327 95.4293 134.064 102.098 151.531 111.466C161.376 116.865 170.586 123.058 179.161 130.203C180.114 130.997 178.843 132.267 177.891 131.473C162.805 118.929 145.338 109.243 127.077 101.781C108.499 94.3178 89.285 89.0779 69.9125 84.632C58.9559 82.0914 47.9992 79.8685 36.8838 77.6455C36.2487 77.6455 36.4075 76.6928 37.0426 76.8516Z"
            fill="currentColor"
          ></path>
          <path
            d="M187.418 137.189C202.027 147.51 213.777 161.165 224.575 175.456C235.373 189.746 245.536 204.672 257.604 218.01C260.938 221.662 264.432 225.155 268.084 228.49C271.736 231.824 275.706 234.841 279.676 237.858C280.47 238.493 280.152 239.922 278.882 239.604C271.101 237.223 263.955 233.571 257.604 228.49C256.969 227.854 257.921 226.902 258.556 227.537C264.749 232.3 271.736 235.952 279.358 237.858C279.041 238.493 278.882 238.969 278.564 239.604C271.26 234.682 264.591 228.49 258.556 221.979C252.364 215.469 246.806 208.483 241.407 201.338C230.609 187.047 220.447 172.121 208.378 158.783C201.709 151.321 194.405 144.493 186.306 138.777C185.671 138.141 186.465 136.554 187.418 137.189Z"
            fill="currentColor"
          ></path>
          <path
            d="M255.222 226.267C241.725 220.71 228.069 215.152 214.095 210.865C200.281 206.578 186.148 203.402 171.698 202.608C157.883 201.815 144.227 202.926 130.571 204.831C123.584 205.784 116.756 206.896 109.769 208.007C103.735 208.96 97.7013 210.071 91.6673 211.342C80.3931 213.723 69.1189 217.217 59.909 224.521C58.7974 225.473 57.6859 226.426 56.5743 227.379C55.9392 227.855 55.1452 227.061 55.7804 226.585C64.0375 218.487 75.4705 214.2 86.4272 211.5C92.1436 210.071 98.0189 208.96 103.894 208.007C110.881 206.737 117.709 205.467 124.696 204.514C138.511 202.291 152.326 200.862 166.299 201.021C180.749 201.338 195.199 203.879 209.014 207.848C223.147 211.977 236.961 217.375 250.617 223.092C252.364 223.727 253.952 224.521 255.699 225.156C256.81 225.315 256.175 226.585 255.222 226.267Z"
            fill="currentColor"
          ></path>
          <path
            d="M181.543 35.7268C196.469 43.9836 209.966 54.9397 221.717 67.3249C233.626 79.8688 243.789 94.3181 251.252 109.879C255.222 118.295 258.398 127.186 260.303 136.396C260.621 137.507 258.715 137.984 258.557 136.872C255.222 120.359 248.076 104.798 238.866 90.8249C229.339 76.3755 217.43 63.6728 204.25 52.5579C196.945 46.5241 189.323 41.1255 181.225 36.362C180.59 36.362 181.066 35.4093 181.543 35.7268Z"
            fill="currentColor"
          ></path>
          <path
            d="M265.227 151.004C269.196 167.358 272.213 184.031 274.595 200.703C275.23 205.467 275.866 210.23 276.501 214.994C276.659 216.264 274.595 216.264 274.595 214.994C272.69 198.321 269.99 181.808 266.497 165.453C265.544 160.848 264.433 156.243 263.321 151.639C262.845 150.21 264.909 149.733 265.227 151.004Z"
            fill="currentColor"
          ></path>
          <path
            d="M364.632 70.9774C352.882 75.8997 342.243 83.8389 334.144 93.8423C331.921 96.7004 329.857 99.5585 327.952 102.734C327.475 103.528 326.205 102.734 326.681 102.099C333.509 90.9842 343.196 81.6159 354.47 74.947C357.646 73.0415 360.98 71.4537 364.315 70.0247C364.95 69.8659 365.268 70.8186 364.632 70.9774Z"
            fill="currentColor"
          ></path>
          <path
            d="M322.232 111.308C313.499 125.757 304.765 140.524 299.366 156.72C296.667 164.977 295.238 173.551 293.65 181.967C292.062 190.541 290.156 199.115 287.616 207.372C286.187 212.135 284.599 216.74 282.852 221.345C281.105 225.95 279.2 230.554 277.771 235.159C277.294 236.429 275.548 235.794 276.024 234.524C277.771 230.396 279.2 226.108 280.788 221.98C282.217 217.852 283.646 213.723 285.075 209.595C287.774 201.338 289.998 192.923 291.585 184.189C293.173 175.615 294.602 167.041 297.143 158.625C299.525 150.527 302.86 142.906 306.671 135.284C310.958 126.71 315.881 118.453 320.803 110.355C321.279 109.561 322.709 110.355 322.232 111.308Z"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </motion.div>
      <div className="text-center flex flex-col items-center">
        <p className="px-4 py-1 mb-10 bg-[#EFF7F7]  text-sm text-[#94857B] font-bold rounded-[30px]">
          AREAS OF SPECIALTY
        </p>
        <h1 className="text-5xl text-center font-medium font-custom">
          Our service
        </h1>
        <div className="flex flex-row flex-wrap w-full 2xl:w-[80%] items-center text-left justify-center gap-5 mt-20 sm:p-0 p-3">
          {services.map((service, index) => (
            <div className=" md:h-[19rem] h-[18rem] w-full md:w-[19rem] rounded-xl relative">
              <img
                src={service.image}
                alt="servive-1"
                className="object-cover w-full h-full rounded-xl"
              />
              <a href="#ds">
                <div className="w-full h-full absolute top-0 border-[1px] border-[#e0e0e0] rounded-xl flex flex-col gap-3 p-3 bg-[#FBF9F6] hover:bg-[#0000006e] hover:text-white transition-all hover:duration-300 group">
                  <LocalHospitalIcon className="text-[#0065B3] group-hover:text-white text-7xl" />
                  <h1 className="text-3xl font-custom font-bold my-5">
                    {service.title}
                  </h1>
                  <p className="mt-1 text-md text-[#4F4D4D] group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button className="text-center my-10 py-3 px-8 rounded-3xl text-sm bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3]">
        Veiw All Services
      </button>
      </div>
    </div>
  );
};

export default SectionFour;
