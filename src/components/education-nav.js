import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const EducationNav = () => {
  const data = useStaticQuery(graphql`{
        allAcademyJson {
            edges {
              node {
                slug
                description
                title
              }
            }
        }    
    }`)

  return (
    <>
      <div className="max-w-4xl mx-auto p-12">
        <h2 className="text-3xl font-bold text-center">Conoce mas de mi informacion educativa</h2>
        <nav className="flex justify-center mt-8">
            {
                data.allAcademyJson.edges.map(education => {
                    const { node } = education;
                    return(
                        <article className="flex bg-white shadow max-w-sm p-4">
                            <header className="text-center">
                                <p className="font-bold leading-loose">{node.title}</p>                                
                                <p>{node.description}</p>
                                <div className="mt-4">
                                    <Link to={`/${node.slug}`} className="btn">Ir</Link>
                                </div>
                            </header>
                        </article>
                    )
                })
            }
        </nav>
      </div>
    </>
  )
}

export default EducationNav
