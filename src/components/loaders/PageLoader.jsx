import React from "react";

function PageLoader() {
    return (
        <>
            <div style={{
                width: "80%",
                height: "80vh",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <img src={require('../../assets/pageLoader.gif')} alt="" style={{
                    minWidth: "400px",
                    width: "40%",
                    height: "50%"
                }}/>
            </div>
            {/* <video src={require('../../assets/pageLoader.webm')}></video> */}
        </>
    );
}

export default PageLoader;
