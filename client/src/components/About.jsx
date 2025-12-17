import Parallax from "./Parallax"
import Reveal from "./Reveal"

function About() {
  return (
    <Parallax offset={80}>
      <section className="bg-black text-white py-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">
              About Natyadeep Foundation
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-300 text-lg leading-relaxed">
              Natyadeep Foundation is a theatre-based social initiative
              that uses art, performance, and storytelling to spread
              awareness, inspire empathy, and create positive change
              in society.
            </p>
          </Reveal>

        </div>
      </section>
    </Parallax>
  )
}

export default About
