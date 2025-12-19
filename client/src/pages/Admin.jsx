import { useEffect, useState } from "react"

function Admin() {
  const [volunteers, setVolunteers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/volunteers")
        const data = await res.json()
        setVolunteers(data.data || [])
      } catch (error) {
        console.error("Error fetching volunteers", error)
      } finally {
        setLoading(false)
      }
    }

    fetchVolunteers()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Volunteer Dashboard
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading volunteers...</p>
      ) : volunteers.length === 0 ? (
        <p className="text-center text-gray-400">
          No volunteers found.
        </p>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-6">
          {volunteers.map((v) => (
            <div
              key={v._id}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-xl font-semibold">{v.name}</h2>

              <div className="mt-2 text-sm text-gray-400 space-y-1">
                <p><span className="text-gray-300">Email:</span> {v.email}</p>
                <p><span className="text-gray-300">Phone:</span> {v.phone}</p>
                <p><span className="text-gray-300">City:</span> {v.city}</p>
                <p><span className="text-gray-300">Interest:</span> {v.interest}</p>
              </div>

              {v.message && (
                <p className="mt-3 text-gray-300 italic">
                  “{v.message}”
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin
