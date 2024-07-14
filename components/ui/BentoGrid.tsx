import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";

import animationData from "@/data/confetti.json";
import { socialMedia } from "@/data";
import MagicButton from "../MagicButton";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  alt?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  children?: React.ReactNode;
  item?: string;
  i?: string;
  src?: string
}

export const BentoGrid = ({className,children}: Props) => {
  return (
    <div
      className={cn(
       
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  }: Props) => {


  const leftLists = ["/nextjs-icon.png", "/typescript-icon.png"];
  const rightLists = ["/tailwind-css-icon.png","/node-icon.png"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "artursantana843@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
              width={50}
              height={50}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              width={50}
              height={50}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 2 && (
            <BackgroundGradientAnimation>
              <div className="flex justify-center items-center text-center pt-[80px]">
                {socialMedia.map((e) => (
                  <div
                    key={e.id}
                    className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] z-50 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-red m-2 "
                  >
                    <Link href={e.link} target="blank">
                      <Image
                        className="md:w-[30px]"
                        src={e.img}
                        width={28}
                        height={22}
                        alt={e.img}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </BackgroundGradientAnimation>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute lg:-right-2 pt-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <Image
                    key={i}
                    src={item}
                    alt={item}
                    className="lg:py-4 lg:px-3 py-2 px-3 mb-0 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    width={60}
                    height={60}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-8 pt-6">
                {rightLists.map((item, i) => (
                  <Image
                    key={i}
                    src={item}
                    alt={item}
                    className="lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    width={60}
                    height={60}
                  />
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
