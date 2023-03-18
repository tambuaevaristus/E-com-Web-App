import React from "react";

function Banner() {
  return (
    <div className="relative lg:mt-10 flex left overflow-y-visible mb-[50px] rounded-md">
     
      <div className="lg:max-h-96 flex justify-evenly items-center rounded-md w-full">
        <img
          className="rounded-md w-full hidden md:block bg-cover lg:w-[100%] h-[440px]"
          alt="Sunset in the mountains"
          src="banner.jpg"
        />
        {/* <img
          className="rounded-md w-full md:hidden bg-cover lg:w-[100%] h-[400px] "
          alt="Sunset in the mountains"
          src="/images/Cliqkets_landing-img_mobile.png"
        /> */}
      </div>
      <div className="flex absolute w-full">
        {/* <button className="bg-white ml-[150px] mt-[330px] hidden md:flex hover:bg-grey-700 text-[#FF5500] font-bold py-2 md:px-6 px-6 rounded-full border-2 border-solid border-[#4C3DF5] body-bold">
          See what makes Cliqkets special
        </button> */}
      </div>
    </div>
  );
}

export default Banner;
