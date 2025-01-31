import React from "react";
import worldCup from "../assets/icons/world-cup.svg";
import wc2022Logo from "../assets/icons/wc2022-logo.svg";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { R16Schedule } from "../components/R16Schedule";
import argentina from "../assets/images/argentina.png";
import australia from "../assets/images/australia.png";
import brazil from "../assets/images/brazil.png";
import croatia from "../assets/images/croatia.png";
import england from "../assets/images/england.png";
import france from "../assets/images/france.png";
import japan from "../assets/images/japan.png";
import morocco from "../assets/images/morocco.png";
import netherlands from "../assets/images/netherlands.png";
import poland from "../assets/images/poland.png";
import portugal from "../assets/images/portugal.png";
import senegal from "../assets/images/senegal.png";
import southKorea from "../assets/images/south-korea.png";
import spain from "../assets/images/spain.png";
import swiss from "../assets/images/swiss.png";
import usa from "../assets/images/usa.png";
import calendar from "../assets/icons/calendar.svg";

export const Home = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/predict");
  };

  return (
    <section className="">
      <div className="container mx-auto px-5 mt-10 items-center lg:flex lg:px-32 lg:gap-10">
        <div className="bg-white shadow-sm border rounded-lg p-10 mt-20 lg:w-1/3">
          <div className="flex flex-col items-center">
            <img className="w-40" src={worldCup} alt="" />

            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">Welcome</h1>
              <h2 className="text-lg text-gray-400 mt-2 text-center">
                Welcome! Please sign in with google account to continue.
              </h2>
            </div>
          </div>

          <button
            onClick={signInWithGoogle}
            className="bg-primary-500 text-white inline-block mt-5   w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
          >
            Sign in with Google
          </button>
        </div>

        {/* <img className="w-full aspect-auto lg:w-1/2 " src={wc2022Logo} alt="" /> */}

        <div className="mt-10 ">
          <div className="flex items-center gap-3">
            <img src={calendar} alt="" />

            <div>
              <h1 className="font-bold text-2xl">Round of 16 Match Schedule</h1>
              <h2 className="font-semibold text-gray-500">
                All times are in Nepal Time
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <R16Schedule
              time={"20:45, Today"}
              countryFlag1={netherlands}
              countryName1={"Netherlands"}
              countryFlag2={usa}
              countryName2={"USA"}
            />

            <R16Schedule
              time={"00:45, Tomorrow"}
              countryFlag1={argentina}
              countryName1={"Argentina"}
              countryFlag2={australia}
              countryName2={"Australia"}
            />

            <R16Schedule
              time={"20:45, 5th Dec"}
              countryFlag1={japan}
              countryName1={"Japan"}
              countryFlag2={croatia}
              countryName2={"Croatia"}
            />

            <R16Schedule
              time={"00:45, 6th Dec"}
              countryFlag1={brazil}
              countryName1={"Brazil"}
              countryFlag2={southKorea}
              countryName2={"South-Korea"}
            />

            <R16Schedule
              time={"20:45, 4th Dec"}
              countryFlag1={france}
              countryName1={"France"}
              countryFlag2={poland}
              countryName2={"Poland"}
            />

            <R16Schedule
              time={"00:45, 5th Dec"}
              countryFlag1={england}
              countryName1={"England"}
              countryFlag2={senegal}
              countryName2={"Senegl"}
            />

            <R16Schedule
              time={"20:45, 6th Dec"}
              countryFlag1={morocco}
              countryName1={"Morocco"}
              countryFlag2={spain}
              countryName2={"Spain"}
            />

            <R16Schedule
              time={"00:45, 7th Dec"}
              countryFlag1={portugal}
              countryName1={"Portugal"}
              countryFlag2={swiss}
              countryName2={"Switzerland"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
