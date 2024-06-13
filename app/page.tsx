'use client';
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/utility";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Main />
    </QueryClientProvider>
  );
}

// export default function Home() {
//   return (
//     <>
//       <div className="bg-white text-gray-800">
//         {/* Header */}
//         <header className="bg-yellow-400 p-4 flex justify-between items-center w-full">
//           <div className="text-xl font-bold">Boston</div>
//           <nav className="space-x-4 hidden md:block">
//             <a href="#" className="text-white">HOME</a>
//             <a href="#" className="text-white">SERVICES</a>
//             <a href="#" className="text-white">SKILLS</a>
//             <a href="#" className="text-white">PORTFOLIO</a>
//             <a href="#" className="text-white">CONTACT</a>
//           </nav>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact Now</button>
//         </header>

//         {/* Hero Section */}
//         <section className="text-center py-20">
//           <h1 className="text-6xl font-bold">I Have Design Experience</h1>
//           <p className="text-gray-600 my-6 mx-auto max-w-xl">
//             I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
//           </p>
//           <button className="bg-yellow-400 text-white px-8 py-3 rounded">Let's Talk</button>
//         </section>

//         {/* Services Section */}
//         <section className="bg-gray-100 py-20">
//           <div className="container px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">Services I Offer</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="bg-white p-6 rounded shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-yellow-400 p-3 rounded-full mr-4">
//                       <i className={`fas fa-${i % 2 === 0 ? 'paint-brush' : 'code'} text-xl text-white`}></i>
//                     </div>
//                     <h3 className="text-xl font-bold">0{i + 1}</h3>
//                   </div>
//                   <h4 className="text-lg font-semibold mb-2">{["Web Design", "Development", "SEO Marketing"][i % 3]}</h4>
//                   <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Skills and Experience Section */}
//         <section className="py-20 container">
//           <div className="px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h2 className="text-4xl font-bold mb-6">Skills and Experience</h2>
//                 <p className="text-gray-600 mb-6">
//                   I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
//                 </p>
//                 <h3 className="text-2xl font-bold mb-4">My Skills</h3>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="flex items-center">
//                     <i className="fas fa-code text-yellow-400 text-2xl mr-3"></i>
//                     <span>HTML</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-paint-brush text-yellow-400 text-2xl mr-3"></i>
//                     <span>CSS</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fab fa-react text-blue-500 text-2xl mr-3"></i>
//                     <span>React JS</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fab fa-angular text-red-600 text-2xl mr-3"></i>
//                     <span>Angular</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-mobile-alt text-green-500 text-2xl mr-3"></i>
//                     <span>iOS/Android App</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-database text-purple-500 text-2xl mr-3"></i>
//                     <span>App Dev</span>
//                   </div>
//                 </div>
//                 <button className="bg-yellow-400 text-white px-8 py-3 rounded">Hire me</button>
//               </div>
//               <div>
//                 <h2 className="text-4xl font-bold mb-6">Experience</h2>
//                 {[...Array(4)].map((_, i) => (
//                   <div key={i} className="mb-4">
//                     <h3 className="text-xl font-semibold">Jan 2021 - Present</h3>
//                     <p className="text-gray-600">Creative Director</p>
//                     <p className="text-gray-600">at Pixel Ltd.</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="bg-gray-100 py-20">
//           <div className="container px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">Latest Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[...Array(9)].map((_, i) => (
//                 <div key={i} className="bg-white p-4 rounded shadow-lg">
//                   <img src={`https://placehold.co/600x400?text=Project+${i + 1}`} alt={`Placeholder image for project ${i + 1}`} className="mb-4 rounded" />
//                   <h4 className="text-lg font-semibold mb-2">Agency Landing page</h4>
//                   <p className="text-gray-600">Web/WordPress</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-20 container">
//           <div className="px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">Client's Kind Word</h2>
//             <div className="flex overflow-x-auto gap-8">
//               {[...Array(3)].map((_, i) => (
//                 <div key={i} className="bg-white p-6 rounded shadow-lg min-w-full md:min-w-0">
//                   <p className="text-gray-600 mb-4">
//                     "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
//                   </p>
//                   <div className="flex items-center">
//                     <img src={`https://placehold.co/100x100?text=User+${i + 1}`} alt={`Placeholder image for testimonial user ${i + 1}`} className="rounded-full mr-4" />
//                     <div>
//                       <h4 className="text-lg font-semibold">Jennifer Luehrman</h4>
//                       <p className="text-gray-600">CEO at pixel.lt</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="bg-yellow-400 py-20">
//           <div className="container px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h2 className="text-4xl font-bold text-white mb-6">Let's Discuss Project</h2>
//                 <form>
//                   <div className="mb-4">
//                     <input type="text" placeholder="First name" className="w-full p-3 rounded" />
//                   </div>
//                   <div className="mb-4">
//                     <input type="email" placeholder="Your Email" className="w-full p-3 rounded" />
//                   </div>
//                   <div className="mb-4">
//                     <input type="text" placeholder="Subject" className="w-full p-3 rounded" />
//                   </div>
//                   <div className="mb-4">
//                     <textarea placeholder="Your message" className="w-full p-3 rounded" rows="4"></textarea>
//                   </div>
//                   <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded">Send Message</button>
//                 </form>
//               </div>
//               <div className="text-white">
//                 <h3 className="text-2xl font-bold mb-4">Contact</h3>
//                 <p className="mb-4"><i className="fas fa-phone mr-3"></i>+01123 654 8096</p>
//                 <p className="mb-4"><i className="fas fa-envelope mr-3"></i>info@domainname.com</p>
//                 <p className="mb-4"><i className="fas fa-map-marker-alt mr-3"></i>Wawrwe Park Streetprerine, FL 33157 New York City</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-800 text-white p-6 text-center container">
//           <div className="flex justify-center space-x-4 mb-4">
//             <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
//             <a href="#" className="hover:text-yellow-400"><i className="fab fa-linkedin-in"></i></a>
//             <a href="#" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
//           </div>
//           <p>&copy; 2024 copyright all right reserved</p>
//         </footer>
//       </div>
//     </>
//   )
// };