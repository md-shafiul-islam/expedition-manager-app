import React from "react";
import BannerFilter from "@/components/Shop/Home/BannerFilter";

const HomeBanner = () => {
  return (
    <div className="grid gap-5">
      <div
        className={`w-full min-h-[450px] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url('/images/banner-bg.png')`,
        }}
      >
        <div class="w-full h-full justify-center items-center bg-gradient-to-tl from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)]">
          <div className="h-80 flex flex-col gap-4 justify-center items-center">
            <div class="grid gap-3">
              <h1 class="text-center text-3xl font-bold">
                Welcome to Ayat Expeditions – Your Gateway to Extraordinary
                Expeditions!
              </h1>
              <p class="text-color-white text-center">
                Dolor sit amet consectetur. Nullam suspendisse vitae ultricies
                dolor adipiscing. In et odio enim ac quis sapien urna eu
                phasellus.
              </p>
            </div>
            <div class="p-5 rounded-md bg-teal-50 dark:bg-stone-900">
              <BannerFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
