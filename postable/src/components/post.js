import React from "react";

function Posts(props) {
    return (
        <div>
            <h1> api posts</h1>
            {props.posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts