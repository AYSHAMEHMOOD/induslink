"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { useState } from "react";
import TermsConditions from "./terms";

// from-[rgb(16,26,29)] via-[rgb(50,69,75)] to-[rgb(16,26,29)]
export default function RegisterPage()
{
  const router = useRouter();
  const[activePage,setActivePage] = useState("terms");
  return (
    <div className="w-[100%] h-full">
      <div id="home" className="h-[100dvh] w-[100%]">
        <header className="text-white px-20 flex justify-between items-center py-2 w-[100%] fixed bg-[rgba(0,0,0,0.82)] border-b border-[rgb(45,45,45)]">
          <Image src={"/images/MainPageImage.png"}  alt="logo" width={120} height={100}/>
          <div className="w-[55%] py-1 flex justify-between px-4">
            <a href="#home" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">Home</a>
            <a href="#features" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">Features</a>
            <a href="#aboutUs" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">About Us</a>
            <a href="#howWorks" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">How it Works</a>
            <a href="#whyChoose" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">Why Us</a>
            <a href="#contact" className="text-[14px] px-2 py-1 hover:bg-[rgb(23,33,35)] border rounded-sm border-transparent hover:border-[rgb(61,83,91)]">Contact</a>
          </div>
          <div className="">
            <button className="px-3 font-bold py-1 border border-[rgb(60,61,61)] bg-white text-black rounded-sm hover:bg-[rgb(234,234,234)]" onClick={() => router.push("/login")}>Log In</button>
          </div>
        </header>
        {activePage === "terms" && <TermsConditions/>}
        {/* <div className="text-white h-[100%] w-fit content-center px-20">
          <h1 className="text-[40px] font-bold">Inter-Factory Collaboration</h1>
          <p className="w-[45%] text-justify mt-2">IndusLink is the all-in-one platform for factories and buyers to collaborate, sign contracts, and manage industrial projects with trust and transparency.</p>
          <button className="px-5 font-bold py-1 my-6 border-1 bg-white text-black rounded-sm hover:bg-[rgb(234,234,234)] hover:text-[19px] text-[18px]" onClick={() => router.push("/seller_buyer")}>Register</button>
        </div> */}
      </div>
      {/* <div id="features" className="flex flex-col items-center px-20">
        <h2 className="text-[45px] pt-10 text-center font-bold mt-5 text-[rgb(50,69,75)]">Our Features</h2>
        <div className="grid grid-cols-3 gap-y-20 gap-x-10 mt-20">
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <Icon icon="gg:profile" width={30} height={30} className='text-black'/>
            <h4 className="font-bold">Seller & Buyer Profiles</h4>
            <p className="text-[12px] text-justify">Engage more customers by showing their abilities & credibility.</p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <Icon icon="fluent:clipboard-text-edit-20-regular" width={30} height={30} />
            <h4 className="font-bold">Digital Contract System</h4>
            <p className="text-[12px] text-justify">Enhance transparency by eliminating physical visits & traditional paper-based agreements.</p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <span>logo</span>
            <h4 className="font-bold">AI-Based Service Matchmaking</h4>
            <p className="text-[12px] text-justify">Saves time by suggesting the best fit service providers instead of typical searching.</p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <Icon icon="ix:box-open" width={30} height={30} className='mr-4'/>
            <h4 className="font-bold">Ording System</h4>
            <p className="text-[12px] text-justify">Complete history of all orders against single contract enhance visibility.</p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <Icon icon="mdi:chat-outline" width={30} height={30} className='mr-4'/>
            <h4 className="font-bold">Integrated Chat SYstem</h4>
            <p className="text-[12px] text-justify">Communicate instantly with your business partners that minimize verbal communication.</p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 border-1 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-sm">
            <Icon icon="oui:app-dashboard" width={22} height={22} className='mr-4' />
            <h4 className="font-bold">Role-Based Interface</h4>
            <p className="text-[12px] text-justify">Access only relevant features and data which increase flexibility.</p>
          </div>
        </div>
      </div>
      <div id="aboutUs" className="px-20">
        <h2 className="text-[45px] pt-20 text-center font-bold text-[rgb(50,69,75)]">About Us</h2>
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            <h2 className="font-bold text-[25px]">About IndusLink</h2>
            <p className="text-justify my-5">IndusLink was founded with a vision to bridge the gap between industrial manufacturers and buyers worldwide. Our mission is to make inter-factory collaboration simpler, smarter, and more transparent, helping industries save time, reduce costs, and build trusted relationships.</p>
            <button className="bg-[rgb(50,69,75)] py-1 px-2 rounded-sm text-white my-2">Learn More</button>
          </div>
          <Image src={"/images/aboutPicture.jpeg"} alt="about" width={400} height={300} className="rounded-sm ml-10"/>
        </div>
      </div>
      <div id="howWorks" className="bg-[rgb(219,227,230)] mt-15 px-20 pt-5 pb-10">
        <h2 className="font-bold text-[30px] text-[rgb(50,69,75)] pt-10">How it Works</h2>
        <p className="w-[50%] py-5 text-justify">IndusLink makes industrial collaboration simple and transparent. Follow these easy steps to connect, collaborate, and grow your business efficiently.</p>
        <div className="flex justify-between py-10">
          <div className="border-1 rounded-sm p-3 flex flex-col gap-2 w-[30%] bg-[rgb(242,244,249)]">
            <span className="bg-black text-white grid place-items-center h-[30px] w-[30px] rounded-full">1</span>
            <h6 className="font-bold text-[18px]">Register</h6>
            <p className="text-justify">Create your seller or buyer account freely.</p>
          </div>
          <div className="border-1 rounded-sm p-3 flex flex-col gap-2 w-[30%] bg-[rgb(242,244,249)]">
            <span className="bg-black text-white grid place-items-center h-[30px] w-[30px] rounded-full">2</span>
            <h6 className="font-bold text-[18px]">Connect</h6>
            <p className="text-justify">Discover verified businesses that match your needs.</p>
          </div>
          <div className="border-1 rounded-sm p-3 flex flex-col gap-2 w-[30%] bg-[rgb(242,244,249)]">
            <span className="bg-black text-white grid place-items-center h-[30px] w-[30px] rounded-full">3</span>
            <h6 className="font-bold text-[18px]">Collaborate</h6>
            <p className="text-justify">Sign contracts, place orders, and start production.</p>
          </div>
        </div>
      </div>
      <div id="whyChoose" className="px-20 pb-15">
        <h2 className="font-bold text-[30px] text-[rgb(50,69,75)] text-center pt-15">Why Choose IndusLink?</h2>
        <p className="text-center my-5 ">Traditional collaboration between factories and buyers is slow, risky, and disconnected. IndusLink brings everything together in one secure and smart platform. Here’s why thousands of industries will trust IndusLink.</p>
        <div className="flex">
          <div>
            <div className="flex">
              <div className="w-[47%] py-2 my-8 mr-5 px-3 shadow-[-4px_4px_8px_rgba(0,0,0,0.3)]">
                <h5 className="mb-3 text-[rgb(191,151,55)] text-[16px] font-bold"><span className="mr-3">01</span>All-in-One Platform</h5>
                <p className="text-justify text-[12px]">Manage contracts, orders, and chat in a single place, no switching tools.</p>
              </div>
              <div className="w-[47%] py-2 my-8  px-3 shadow-[-4px_4px_8px_rgba(0,0,0,0.3)]">
                <h5 className="mb-3 text-[rgb(191,151,55)] text-[16px] font-bold"><span className="mr-3">02</span>Verified & Trusted Network</h5>
                <p className="text-justify text-[12px]">Connect only with verified factories and buyers, ensuring reliability and authenticity.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[47%] py-2 my-8 mr-5 px-3 shadow-[-4px_4px_8px_rgba(0,0,0,0.3)]">
                <h5 className="mb-3 text-[rgb(191,151,55)] text-[16px] font-bold"><span className="mr-3">03</span>Secure Digital Contracts</h5>
                <p className="text-justify text-[12px]">Sign, track, and store contracts securely with full transparency.</p>
              </div>
              <div className="w-[47%] py-2 my-8  px-3 shadow-[-4px_4px_8px_rgba(0,0,0,0.3)]">
                <h5 className="mb-3 text-[rgb(191,151,55)] text-[16px] font-bold"><span className="mr-3">04</span>Real-Time Communication</h5>
                <p className="text-justify text-[12px]">Collaborate instantly through built-in chat and notifications.</p>
              </div>
            </div>
          </div> */}
          {/* <div className="w-[70%] flex items-center">
            <Image src={"/images/PHOTO-2025-10-23-23-35-07.jpg"} width={500} height={200} className="border-1 rounded-sm" alt="why choose induslink"/>
          </div>
        </div>
      </div> */}
     { /*<div id="contact" className="px-20 bg-[rgb(50,69,75)] text-white relative">
        <footer className="py-15" >
          <div className="w-[100%] grid grid-cols-6 gap-3">
            <div className="flex flex-col w-[100%] col-span-3">
                <Image
                  src="/images/MainPageImage.png"
                  alt="IndusLink Logo"
                  width={250}
                  height={200}
                  className="mb-4 absolute left-14 top-12"
                />
              <p className="text-[14px] text-gray-200 text-justify pr-10 pt-25">
                IndusLink connects factories and buyers through digital collaboration,
                secure contracts, and transparent partnerships,
                simplifying trade and building industrial trust.
              </p>
            </div>
            <div className="flex flex-col ">
              <h4 className="font-semibold text-[18px] mb-3 border-b border-[rgba(255,255,255,0.2)] pb-2 w-fit">
                Explore
              </h4>
              <ul className="space-y-2 mt-3 text-[14px] text-gray-300">
                <li className="hover:text-[rgb(191,151,55)] cursor-pointer transition-colors">Home</li>
                <li className="hover:text-[rgb(191,151,55)] cursor-pointer transition-colors">Features</li>
                <li className="hover:text-[rgb(191,151,55)] cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-[rgb(191,151,55)] cursor-pointer transition-colors">How It Works</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-[18px] mb-3 border-b border-[rgba(255,255,255,0.2)] pb-2 w-fit">
                Contact Us
              </h4>
              <div className="mt-3 text-[14px] text-gray-300 space-y-1">
                <p> Industrial Area, FSD, Pakistan</p>
                <p> info@induslink.com</p>
                <p> +92 300 1234567</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Icon icon="mdi:linkedin" width={22} height={22} className="cursor-pointer hover:text-[rgb(191,151,55)]" />
                <Icon icon="mdi:facebook" width={22} height={22} className="cursor-pointer hover:text-[rgb(191,151,55)]" />
                <Icon icon="mdi:instagram" width={22} height={22} className="cursor-pointer hover:text-[rgb(191,151,55)]" />
                <Icon icon="mdi:twitter" width={22} height={22} className="cursor-pointer hover:text-[rgb(191,151,55)]" />
              </div>
            </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[18px] mb-3 border-b border-[rgba(255,255,255,0.2)] pb-2 w-fit">Policy & Terms</h4>
                <button className="mt-3 text-[14px] text-gray-300 space-y-1" onClick={()=>{setActivePage("terms")}}>Terms & Conditions</button>
                <span className="mt-3 text-[14px] text-gray-300 space-y-1">Privacy Policies</span>
              </div>
          </div>
          <div className="border-t border-[rgba(255,255,255,0.1)] mt-8 pt-4 text-center text-[13px] text-gray-400">
            ©️ {new Date().getFullYear()} <span className="text-white font-semibold">IndusLink</span>. All rights reserved.
          </div>
        </footer>
      </div>*/}
      
    </div>
  );
}