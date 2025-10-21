import React from 'react'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router'
import SpaceBG from './components/SpaceBG'

function Layout() {
  return (
    <>
    <SpaceBG/>
    <main className="relative z-10 text-white">
        {/* Your hero, navbar, sections, etc. */}
        <h1 className="text-4xl font-bold text-center mt-32">Welcome to My Galaxy 🌌</h1>
      </main>
    </>
  )
}

export default Layout