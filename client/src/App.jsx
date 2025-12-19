import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import VolunteerForm from "./components/VolunteerForm"

import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Website */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Impact />
              <VolunteerForm />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
