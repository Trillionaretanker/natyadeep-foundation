import Parallax from "./Parallax"
import Reveal from "./Reveal"
import Counter from "./Counter"

function Impact() {
  return (
    <Parallax offset={60}>
      <section className="bg-black text-white py-32">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Impact
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

            <Reveal>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  <Counter value={120} />+
                </h3>
                <p className="mt-2 text-gray-300">Plays Performed</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  <Counter value={25000} />+
                </h3>
                <p className="mt-2 text-gray-300">Lives Impacted</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  <Counter value={80} />+
                </h3>
                <p className="mt-2 text-gray-300">Workshops Conducted</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  <Counter value={40} />+
                </h3>
                <p className="mt-2 text-gray-300">Communities Reached</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </Parallax>
  )
}

export default Impact
