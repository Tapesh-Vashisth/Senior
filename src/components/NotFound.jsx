import React from 'react'

function NotFound({type}) {

    return (
        <div style = {{display:"flex", flexGrow: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
            <div>
                <img src={require("../assets/NoPost.png")} />
            </div>
            <div>
                <h3>Nothing here yet</h3>
                <p>Create your first {type} by clicking on the "+" button above</p>
            </div>
        </div>
    )
}

export default NotFound