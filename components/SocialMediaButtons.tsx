import React from 'react'
import { FaBehanceSquare, FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaPinterestSquare } from "react-icons/fa";



const SocialMediaButtons = ({
    direction
}: {
    direction?: 'row' | 'column'
}) => {
    return (
        <div
            className={`flex gap-5 ${direction === 'row' ? 'flex-row' : 'flex-col'
                }`}
        >
            <a
                href="https://www.behance.net/yoshitaarora"
                target='_blank'>
                <FaBehanceSquare className="text-2xl" />
            </a>
            <a
                href="https://www.facebook.com/misskerrycature"
                target='_blank'>
                <FaFacebookSquare className="text-2xl text-secondary" />
            </a>
            <a
                href="https://www.instagram.com/misskerrycature/"
                target='_blank'>
                <FaInstagramSquare className="text-2xl text-highlight" />
            </a>
            <a
                href="https://www.pinterest.ca/misskerrycature"
                target='_blank'>
                <FaPinterestSquare className="text-2xl text-secondary" />
            </a>
            <a
                href="https://www.linkedin.com/in/yoshitarora/"
                target='_blank'>
                <FaLinkedin className="text-2xl" />
            </a>
        </div>
    )
}

export default SocialMediaButtons
