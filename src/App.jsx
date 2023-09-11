import React from "react";
import { Icon } from "@fortawesome/fontawesome-svg-core";

const App = () => {
  return (
    <div>
      {/* header section */}
      <section>
        <header className="w-screen h-screen lg:h-40  flex flex-col lg:flex-row items-center justify-around bg-gray-300 overflow-hidden">
          <img
            className="w-full h-auto lg:w-32 lg:h-32 object-cover lg:rounded-full blur-sm lg:blur-none lg:drop-shadow-[5px_5px_7px_rgba(0,0,0,0.5)]"
            src="https://pps.whatsapp.net/v/t61.24694-24/363644008_1003415360789502_8169214166157475159_n.jpg?ccb=11-4&oh=01_AdQKcZ0_neb490zLGjNfddZ_pmh_tZCfaAKUkl5b95zoRg&oe=650A5FC9&_nc_sid=000000&_nc_cat=101"
            alt="profile picture"
          />

          <nav>
            <ul className="relative bottom-12 lg:read-only lg:bottom-0 flex flex-row items-center justify-center gap-3 lg:gap-0 w-60 h-10 lg:w-full lg:h-14 lg:px-10 rounded-3xl font-light">
              <li>
                <a
                  href="#"
                  className=" bg-gray-50  hover:bg-orange-200  lg:px-20 lg:py-4 px-7 py-4 rounded-full lg:rounded-r-3xl"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gray-50 hover:bg-orange-200  lg:px-20 lg:py-4 px-7 py-4 rounded-full lg:rounded-none"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gray-50 lg:rounded-none hover:bg-orange-200 lg:px-20 lg:py-4 px-7 py-4 rounded-full lg:rounded-r-3xl"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>

          <button className=" relative bottom-10 lg:read-only lg:bottom-0 bg-orange-100 px-24 py-4 lg:px-6 lg:py-3 hover:bg-orange-200 rounded-3xl text-xl font-light hover:active:drop-shadow-[5px_5px_7px_rgba(0,0,0,0.5)] active:translate-x-1 active:translate-y-1 ">
            Get Start
          </button>
        </header>
      </section>

      {/* section content */}
      <section className="bg-gray-300 w-screen h-screen py-40 overflow-hidden">
        <div className="flex flex-col  lg:flex-row items-center justify-evenly gap-10 lg:gap-0">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="lg:text-7xl text-5xl text-center  font-serif font-medium">
              Hii,I'M RUBAN
            </h1>
            <h2 className="lg:text-5xl text-3xl text-center font-thin">
              Full-stock Web Developer
            </h2>
            <button className="px-10 py-5 my-5 bg-orange-100 text-black font-light text-2xl hover:bg-orange-200  active:drop-shadow-[5px_5px_7px_rgba(0,0,0,0.5)] rounded-3xl">
              Follow
            </button>
          </div>

          <img
            className="lg:w-1/2 lg:h-3/4 lg:rounded-r-full lg:rounded-bl-full h-auto lg:object-cover object-center lg:drop-shadow-[5px_5px_7px_rgba(0,0,0,0.5)]"
            src="https://png.pngtree.com/illustration/20190226/ourmid/pngtree-business-office-meeting-illustration-image_10276.jpg"
            alt=""
          />
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col justify-center items-center py-20 gap-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl font-extralight my-5">ABOUT</h1>
          <p className="text-xl lg:text-2xl font-light text-justify lg:text-center px-10 lg:px-40">
            Hi, I am Ruban and I work as a web developer. I am a software
            engineer who loves to create websites as well as apps for people. I
            think that people should look at the bigger picture when they are
            building something. I love to work in groups where everyone can
            voice their opinions and ideas.
          </p>
        </div>

        <div className="w-full h-auto flex lg:flex-row  flex-col items-center justify-around bg-gray-300">
          <img
            className="w-1/3 my-10 rounded-xl drop-shadow-[5px_5px_7px_rgba(0,0,0,0.5)]"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="flex flex-col items-center justify-center text-center py-10 lg:py-10">
            <h1 className="text-6xl font-serif">RUBAN</h1>
            <p className="text-5xl font-thin ">WEB DEVELOPER</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
