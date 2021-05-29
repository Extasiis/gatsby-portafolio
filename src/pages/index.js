import React from "react"
import CodigoFacilito from "../components/codigofacilito"
import EducationNav from "../components/education-nav"
import Header from "../components/header"
import Medium from "../components/medium"
import Repos from "../components/repos"

export default function Home() {
  return (
    <>
      <Header />
      <EducationNav />
      <Repos />
      <CodigoFacilito />
      <Medium />
    </>

  )
}
