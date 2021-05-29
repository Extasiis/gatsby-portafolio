import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ModelSection from "./modelSection"
import ModelCard from './modelCard.js'

const CodigoFacilito = props => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          finished_courses {
            title
          }
          courses {
            progress
            title
          }
        }
      }
    }
  `)
  return (
    <>
      <ModelSection title="Cursos finalizados de Codigo Facilito" gray="300">
       <ModelCard data={data.codigofacilitoJson.data.finished_courses}  title={data.title} medium={false}/>
      </ModelSection>
      <ModelSection title="Cursos realizando de Codigo Facilito" gray="100">
        <ModelCard data={data.codigofacilitoJson.data.courses}  title={data.title} spaner={data.progress} medium={false}/>
      </ModelSection>
    </>
  )
}

export default CodigoFacilito
