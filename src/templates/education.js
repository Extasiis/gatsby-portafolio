import React from "react"
import { graphql, Link } from "gatsby"
import EducationNav from "../components/education-nav"

const Education = props => {
  const pageData = props.data.academyJson
  return (
    <>
      <section className="bg-gray-200">
        <header className="py-12 border-blue-500 border-solid border-t-8 ">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="uppercase underline text-blue-500">Regresar</Link>
            <h2 className="capitalize text-6xl">{pageData.title}</h2>
            <p className="text-xl">{pageData.description}</p>
          </div>
        </header>
        <ul className="mt-6">
          {pageData.items.map(item => (
            <li
              key={item.id}
              className="bg-white shadow my-4 flex items-center flex-1 p-8"
            >
              <p className="vertical-text">{pageData.slug}</p>
              <div className="flex-1 p-4">
                <h4 className="text-xl ">{item.name}</h4>
                <p className="inline-block radius bg-blue-100 text-blue-700">
                  {item.description}
                </p>
                {
                  item.url ? <a
                  href={item.url}
                  target="_blank"
                  rel="nooponer noreferrer"
                  className="block text-blue-500"
                >
                  {item.plataforma}
                </a> : <p className="block text-blue-500">{item.plataforma}</p>
                }
                <button href={item.image} className="inline-block btn">Ver imagen</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <EducationNav />
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    academyJson(slug: { eq: $slug }) {
      slug
      title
      description
      id
      items {
          description
          image
          plataforma
          name
          url
          id
      }
    }
  }
`

export default Education
