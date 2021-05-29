import React from 'react'

const ModelSection = (props) => {
  return (
    <>
      <section className={`py-12 w-auto`}>
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">{props.title}</h2>
            <div className={props.medium ? "overflow-x-auto flex " : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 max-h-screen overflow-auto`}>

             {props.children}
             
            </div>
        </div>
      </section>
    </>
  )
}

export default ModelSection
