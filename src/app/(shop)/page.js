import React from "react";
import HomeBanner from "@/components/Shop/Home/HomeBanner";
import TopDestinations from "@/components/Shop/Home/TopDestinations";
const homePage = () => {
  return (
    <React.Fragment>
      <section>
        <HomeBanner />
      </section>
      <section className="my-9">
        <div className="container mx-auto grid gap-7">
          <h2 className="text-2xl font-semibold text-center">
            Explore the World's Most Enchanting Destinations
          </h2>
          <p>
            Discover handpicked locations that promise unforgettable
            experiences. Whether you're seeking adventure, relaxation, or a
            cultural journey, we've got you covered.
          </p>

          <TopDestinations />
        </div>
      </section>

      <section>
        <div className="container mx-auto grid gap-7">
          <h2 className="text-2xl font-semibold text-center">
            Explore the World's Most Enchanting Destinations
          </h2>
          <p>
            Discover handpicked locations that promise unforgettable
            experiences. Whether you're seeking adventure, relaxation, or a
            cultural journey, we've got you covered.
          </p>

          <TopDestinations />
        </div>
      </section>
    </React.Fragment>
  );
};

export default homePage;
