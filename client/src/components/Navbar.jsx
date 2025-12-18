import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    // Hide navbar on scroll down
    if (latest > previous && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    // Change background after scroll
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      initial={{ y: -80 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Natyadeep
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-orange-400 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-400 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-400 transition">
            Impact
          </li>
          <li className="cursor-pointer hover:text-orange-400 transition">
            Volunteer
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
