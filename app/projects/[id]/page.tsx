/* eslint-disable @next/next/no-img-element */
'use client';
import { getProjectById } from "@/sanity/sanity.query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import Navbar from "@/components/Navbar";


export default function Page({ params }: { params: { id: string } }) {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        getProjectById(params.id).then((res) => setData(res));
    }, [params.id]);
    if (!data) return <div>Loading...</div>
    return <>
        <Navbar />
        {data.map((project) => (
            <div key={project._id} className="mx-2 py-5 md:mx-20 md:py-10 flex flex-col gap-10">
                {/* create a carousel using tailwindcss */}
                <div className="h-56 sm:h-[25rem] xl:h-[35rem] 2xl:h-[50rem]">
                    <Carousel>
                        {project.carouselImages.map((image: any) => (
                            <img key={image} src={image} alt={project.title} width={800} height={703} />
                        ))}
                    </Carousel>
                    {/* {project.carouselImages.map((image: any) => (
                        <Image key={image} src={image} alt={project.title} width={800} height={703} />
                    ))} */}
                </div>
                <h1
                    className="text-4xl font-bold text-secondary"
                >{project.title}</h1>
                <div className="flex flex-col gap-5">
                    {project.description.map((desc: any) => (
                        <p key={desc} 
                            className="text-xl text-primary"
                        >{desc}</p>
                    ))}
                </div>
                <h2
                    className="text-2xl font-bold text-secondary"
                >Software Used</h2>
                <p className="flex flex-wrap gap-5 flex-col md:flex-row">
                    {project.software.map((software: any) => (
                        <span key={software} className="text-xl text-primary">{software}</span>
                    ))}
                </p>
            </div>
        ))}
    </>
}