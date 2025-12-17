import { useTheme } from "../context/ThemeContext"
import { useEffect, useState } from "react"


function Navbar() {
    const { theme, toggleTheme } = useTheme()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide">
          Natyadeep Foundation
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="cursor-pointer hover:text-yellow-400">About</li>
          <li className="cursor-pointer hover:text-yellow-400">Impact</li>
          <li className="cursor-pointer hover:text-yellow-400">Volunteer</li>
          <li className="cursor-pointer hover:text-yellow-400">Contact</li>
        </ul>

        <button className="px-4 py-2 bg-yellow-400 text-black text-sm font-semibold rounded-lg">
          Donate
        </button>

        <button
  onClick={toggleTheme}
  className="
    ml-4 px-3 py-2 rounded-lg text-sm font-medium
    border border-brandOrange
    text-brandOrange
    hover:bg-brandOrange hover:text-white
    transition
  "
>
  {theme === "dark" ? "Light Mode" : "Dark Mode"}
</button>

      </div>
    </nav>
  )
}

export default Navbar
