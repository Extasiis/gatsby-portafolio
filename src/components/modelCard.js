import React from "react"

const ModelCard = (props) => {
  return (
    <>
      {props.data.map( data => (
        
        <div className="shadow p-3 bg-white grid grid-rows-2 text-center">
            <div className="row-span-2">
          <h4 className="font-bold">{data.title}</h4>
          </div>
          <div className="my-1.5">
            <span className="inline-block bg-blue-200 text-blue-800 p-3 radius">
              { 
                data.progress ? data.progress : "Terminado" 
              }
            </span>
          </div>
        </div>
      ))}
    </>
  )
}

export default ModelCard