// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.header
//       className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//         isScrolled ? "bg-white bg-opacity-80 backdrop-blur-sm" : "bg-transparent"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <nav className="container mx-auto px-6 py-4">
//         <ul className="flex justify-center space-x-8">
//           <li>
//             <a href="#bio" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
//               Bio
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#experience" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
//               Experience
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </motion.header>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white bg-opacity-80 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
        
        {/* Logo / Branding (Does NOT affect menu positioning) */}
        {/* <div className="text-xl font-bold flex-none">Vicente Vigueras</div> */}

        {/* Desktop Navigation - Always Centered */}
        <ul className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a href="#bio" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Bio
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Experience
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button - Always on Right */}
        <button 
          className="md:hidden text-gray-800 flex-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
            >
              <ul className="flex flex-col items-center space-y-4 py-6">
                <li>
                  <a 
                    href="#bio" 
                    className="text-lg font-medium hover:text-[#a67c52] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bio
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-lg font-medium hover:text-[#a67c52] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-lg font-medium hover:text-[#a67c52] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
