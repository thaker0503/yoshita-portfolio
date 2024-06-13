'use client';
import React from 'react'
import { getProject } from "@/sanity/sanity.query";
import { Project } from "@/types";
import { useQuery } from 'react-query';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    const {
        data: projects,
        isLoading,
        error,
    } = useQuery('projects', getProject);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error)}</div>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 md:mx-20 md:my-10">
            {projects.map((project: Project) => (
                <div key={project._id}
                    className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
                >
                    <Link href={`/projects/${project._id}`} passHref className='h-full w-full'>
                        <Image src={project.image} alt={project.title} width={612} height={100} />
                        <h2
                            className="text-md font-bold text-gray-800 absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 p-4"
                        >{project.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Projects
