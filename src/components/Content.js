import React from 'react'

import './Content.css'

function content() {
    const contentData = [
        {
            id: '1', 
            title: 'Title 1', 
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
            urlImg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },            
        {
            
            id: '2', 
            title: 'Title 2', 
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
            urlImg: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
        },
        {
            id: '3', 
            title: 'Title 3', 
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
            urlImg: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        }
    ];

    return (
        <div className="container content">
            <div className="container-center">
                { 
                    contentData.map((data) => 
                        <div className="container-content">
                            <div className="content-blog">
                                <img src={data.urlImg} />
                            </div>
                            <div className="content-blog">
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            
        </div>
    )
}

export default content
