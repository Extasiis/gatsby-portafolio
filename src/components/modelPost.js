import React from "react"

const ModelPost = props => {
  return (
    <>
      {props.data.map(data => (
        <div className="shadow bg-white inline-block m-4 text-center rounded-lg">
          <div className="">
            <img
              src={data.thumbnail}
              alt="Imagen de los Post"
              className="h-40 mx-auto w-full bg-contain bg-center rounded-t-lg"
            ></img>
            <h4 className="font-bold">{data.title}</h4>
          </div>
          <div className="my-1.5">
            <span className="inline-block bg-blue-200 text-blue-800 p-3 radius">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                Leer Mas
              </a>
            </span>
          </div>
        </div>
      ))}
    </>
  )
}

export default ModelPost
