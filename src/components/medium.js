import React, { useEffect, useState } from 'react'
import ModelPost from './modelPost';
import ModelSection from './modelSection';

const Medium = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const data = sessionStorage.getItem("posts")

        if (data) {
            setPosts(JSON.parse(data))
        }

        let myPosts;

        async function getMediumPost(){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40dm22657%2F");
            myPosts = await response.json();

            sessionStorage.setItem("posts", JSON.stringify(myPosts.items))

            setPosts(myPosts.items)
        }

        getMediumPost();
    }, []);
  return (
    <>  
    <div className="w-auto">
        <ModelSection title="Mis Publicaciones Medium" medium>
            <ModelPost data={posts} medium />
        </ModelSection>
    </div>
    </>
  )
}

export default Medium
