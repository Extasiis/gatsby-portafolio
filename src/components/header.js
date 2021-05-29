import React from "react"
import ilustracionHero from "../img/heroImg.svg"
import ContactForm from "./contactForm"

const Header = () => {
  return (
    <header className="bg-gray-300">
      <div className="container py-12 mx-auto max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-6xl font-bold text-blue-500">Hola soy David</h1>
            <p className="text-xl font-light">Creo y diseño aplicaciones web</p>
          </div>
          <img
            src={ilustracionHero}
            alt="Un programador"
            className="w-96"
          ></img>
        </div>
        <ContactForm />
      </div>
    </header>
  )
}

export default Header
