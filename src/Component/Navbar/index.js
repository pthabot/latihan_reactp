import React from 'react'
import "./nav.css"

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Produk</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Kontak</a>
            </li>
        </ul>
    </nav>
  )
}
