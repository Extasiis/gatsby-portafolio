import React from 'react'

const ModelRepo = (props) => {
  return (
    <>
      <li className="flex items-center ">
          <div className="flex-1">
          <h4 className="text-indigo-800 font-bold">
              {props.repo.name}
        </h4>
          <p className="text-sm text-gray-700 overflow-y-hidden h-6">
              {props.repo.description}
          </p>
          </div>
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver</a>
      </li>
    </>
  )
}

export default ModelRepo
