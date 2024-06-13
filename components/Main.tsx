'use client';
import Projects from "@/components/Projects";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import SocialMediaButtons from "./SocialMediaButtons";

const Main = () => {
    return (
        <>
            <div
                className="fixed left-0 top-1/2 z-50 transform -translate-y-1/2 px-2 py-2 bg-white rounded-r-lg shadow-md"
            >
                <SocialMediaButtons
                    direction="column"
                />
            </div>
            <section className="text-black py-20 h-svh md:min-h-screen">
                <div className="mx-auto px-6 md:px-12 flex justify-center items-center h-full">
                    <div className="md:flex md:justify-between md:items-center md:gap-10">
                        <div className="md:w-1/2 lg:w-3/5">
                            <div className="p-6">
                                <Image
                                    src="/hero-image.png"
                                    alt="hero"
                                    width={614}
                                    height={652}
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-2/5 mt-8 md:mt-0 text-center md:text-left">
                            <h1 className="text-4xl font-semibold mb-2 text-primary"> Hi! I{"'"}m</h1>
                            <h1 className="text-6xl font-bold mb-2 text-primary">Yoshita</h1>
                            <p className="mb-6 text-2xl leading-10 md:max-w-sm text-primary">I am a graphic designer and Digital Media Manager.</p>
                            <button
                                className="bg-primary hover:bg-primary/50 text-white font-bold py-2 px-4 rounded mb-4"
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                            >Let{"'"}s Connect</button>
                            {/* <a href="#" className="text-blue-300 hover:text-blue-200">Free preview →</a> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-full min-h-screen py-20 mx-auto px-5 md:px-20" id="about">
                <h2 className="leading-5 text-secondary font-semibold text-5xl md:text-8xl text-center mb-10">
                    About
                </h2>
                <div className="flex flex-col items-end w-full">
                    <div className="text-center text-2xl max-w-2xl mx-auto mt-16 mb-5 flex">
                        <FaQuoteLeft className="text-4xl text-primary mr-5" />
                        <div className="text-2xl flex pt-10 items-start">
                            Half geek - Half designer - brings your ideas to life. <FaQuoteRight className="ml-2 text-xs text-primary" />
                        </div>
                    </div>
                    <p className="text-right w-full text-3xl font-semibold max-w-2xl mx-auto">
                        - Yoshita
                    </p>
                </div>
                <section className="h-full w-full mx-auto max-w-5xl py-10 flex gap-10 justify-center items-center flex-col md:flex-row">
                    <Image src="/about-image.png" alt="about" width={340} height={472} className="h-full min-h-[450px]" />
                    <div>
                        <p className="text-2xl mt-5">
                            Hello and welcome to my creative space! I{"'"}m Yoshita Arora, a Graphic Designer and Digital Media Marketing Manager based in Toronto, Canada. With a background that bridges over five years in the creative industry, I specialize in delivering compelling visual content and innovative marketing strategies designed to elevate brands and capture audiences.
                        </p>
                        <p className="text-2xl mt-5">
                            My portfolio is a vibrant tapestry of projects, ranging from custom illustrations and vector artwork to comprehensive design packages that enhance branding, marketing, and advertising efforts. I excel in Adobe Photoshop, Illustrator, InDesign, and other key design tools, enabling me to bring creative visions to life across various mediums.
                        </p>
                    </div>
                </section>
                <p className="text-2xl mt-5 mx-auto max-w-5xl">
                    At the heart of my work is a passion for storytelling through design. Whether it{"'"}s developing bespoke designs for canvases, apparel or packaging design for the pharmaceutical and cosmetics sectors, I aim to create visuals that not only look stunning but also resonate deeply with the target audience.
                </p>
                <p className="text-2xl mt-5 mx-auto max-w-5xl">
                    I hold a Diploma in Graphic Design from Humber College and a Bachelor of Law, which equip me with a unique blend of creative thinking and strategic acumen. I{"'"}m always open to collaborations and opportunities where I can put my skills to work and create something extraordinary. Let{"'"}s connect and explore how we can tell your brand{"'"}s story together through captivating design!
                </p>
            </section>
            <section className="w-full h-full min-h-fit py-20 mx-auto px-5 md:px-0" id="portfolio">
                <h2 className="text-secondary font-semibold text-5xl md:text-8xl text-center min-h-fit">
                    Projects
                </h2>
                <br />
                <Projects />
            </section>
            <section className="w-full h-full min-h-fit py-20" id="contact">
                <h2 className="text-secondary font-semibold text-5xl md:text-8xl text-center min-h-fit">
                    Contact
                </h2>
                <br />
                <div>
                    <form className="w-full max-w-2xl mx-auto px-10 md:px-5">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Message
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" placeholder="Your message"></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center md:justify-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-primary hover:bg-primary/50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                                    Send
                                </button>
                            </div>
                            {/* <div className="md:w-2/3"></div> */}
                        </div>
                    </form>
                </div>
                <div className="text-center text-gray-500 text-md mt-10 flex flex-col md:flex-row gap-10 w-full justify-center ">
                    {/* <p>© 2021 Yoshita. All rights reserved.</p> */}
                    <p>Email: <a href="mailto:yoshitarora05@gmail.com">yoshitarora05@gmail.com</a></p>
                    <p>Website: <a href="https://www.yoshitarora.com">www.yoshitarora.com</a></p>
                    <p>Number:  <a href="tel:+16478915673">+1 647 891 5673</a></p>
                </div>
                <div
                    className="w-full text-center text-md mt-10 flex justify-center"
                >
                    <SocialMediaButtons
                        direction="row"
                    />
                </div>
            </section>
            <footer className="w-full h-20 bg-primary text-white text-center flex justify-center items-center">
                <p>© {
                    new Date().getFullYear()
                } Yoshita. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Main


{/* <main className="px-20 h-full min-h-[calc(100vh-100px)] mt-10">
        <section className="w-full h-[100%] flex justify-center items-center">
          <Image
            src="/hero-image.png"
            alt="hero"
            width={614}
            height={652}
          />
          <div className="hero-text flex-1 h-full w-full">
            <h3 className="text-2xl font-semibold leading-10">
              Hi! I{"'"}m
            </h3>
            <h1 className="text-4xl font-bold leading-10">
              Yoshita
            </h1>
            <h2 className="text-2xl leading-10 max-w-sm">
              I am a graphic designer and Digital Media Manager.
            </h2>
            <button className="bg-primary text-white px-4 py-2 rounded-lg mt-5">
              Let{"'"}s Connect
            </button>
          </div>
        </section>
      </main> */}