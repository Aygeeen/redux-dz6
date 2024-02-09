import React, { useState } from "react";

function Post({ postInfo }) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <>
            <h1>{postInfo.title}</h1>
            <button onClick={toggleInfo}>{showInfo ? "Hide info" : "More info"}</button>
            {showInfo && (
                <>
                    <p>{postInfo.body}</p>
                </>
            )}
            <p>--------------------------</p>
        </>
    );
}

export default Post;