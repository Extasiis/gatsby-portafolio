import React from "react"

const ContactForm = () => {
  return (
    <>
      <form method="POST" className="mt-16 text-center">
        <label
          htmlFor="contact-content"
          className="text-gray-700 text-sm font-bold mb-2"
        >
          Cuentame sobre ese proyecto que tanto deseas
        </label>
        <div className="flex shadow rounded bg-white border p-2">
          <textarea
            id="contact-content"
            name="contact-content"
            className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="btn ml-4">Enviar</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
