import React, { useEffect, useState } from 'react';
import ModelRepo from './modelRepo';


const Repos = () => {
  const [repos, setRepos] =  useState([]);
  const [reposCount, setReposCount] =  useState([]);

  useEffect(() => {
    //Solicitar los datos del api de Github y con sessionStorage para no solicitarlo constanteente si no despues de cierre de la pagina e inicio
    const data = sessionStorage.getItem("repos");
    let myRepos;

    if (data) {
      myRepos = JSON.parse(data);

      setReposCount(myRepos.length); //Calcula la cantidad de repos por medio de length

      myRepos = myRepos.slice(0, 12); // Reduce los resultado a 12 slice methodo de Array
      return setRepos(myRepos)
    }

    async function fetchRepos(){
      const response = await fetch("https://api.github.com/users/Extasiis/repos");
      myRepos = await response.json();

      setReposCount(myRepos.length);

      sessionStorage.setItem("repos", JSON.stringify(myRepos))
      myRepos = myRepos.slice(0, 12); // Reduce los resultado a 12 slice methodo de Array
       setRepos(myRepos)
    }
    fetchRepos()
  }, []);

  return (
    <>
      <section className="max-w-4xl mx-auto px-4 my-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
          <p>Colaboracion y contribucion de codigo</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 my-4">
          {
            repos.map((repo) => {
              return <ModelRepo repo={repo} key={repo.id}/>
            })
          }
        </ul>
        <div className="mt-8 text-center">
        <a 
         href="https://github.com/Extasiis"
         target="_blank" 
         rel="nooponer noreferrer"
         className="btn">
           Ver mas en Github {reposCount}
        </a>
        </div>
      </section>
    </>
  )
}

export default Repos
