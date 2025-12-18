import { useState } from "react"

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("http://localhost:5000/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      setSuccess("Thank you for joining us! We will contact you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        message: "",
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Become a Volunteer
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            required
          />

          <input
            type="text"
            name="interest"
            placeholder="Area of Interest (Acting, Teaching, etc.)"
            value={formData.interest}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            required
          />

          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            rows="4"
          />

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {loading ? "Submitting..." : "Join as Volunteer"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default VolunteerForm
