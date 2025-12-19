import { motion } from "framer-motion"
import NatarajaCanvas from "../Canvas/NatarajaCanvas"

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen pt-20 overflow-hidden
        bg-lightBg text-lightText
        dark:bg-black dark:text-white
      "
    >
      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <NatarajaCanvas />
      </div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Where Theatre <br /> Heals Society
            </h1>

            <p className="text-lg max-w-xl text-lightMuted dark:text-gray-300">
              Natyadeep Foundation uses theatre, art, and performance
              to create social awareness and meaningful change.
            </p>

            <div className="flex gap-4">
              <button
                className="
                  px-6 py-3 rounded-lg font-semibold
                  bg-brandOrange text-white
                  hover:opacity-90 transition
                "
              >
                Donate Now
              </button>

              <button
                className="
                  px-6 py-3 rounded-lg font-semibold
                  border border-brandOrange text-brandOrange
                  hover:bg-brandOrange hover:text-white
                  transition
                "
              >
                Join Us
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
