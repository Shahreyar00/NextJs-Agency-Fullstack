"use client"
import { Audio } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Audio
                height="100"
                width="100"
                color="#ffffff"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        </div>
    )
}

export default Loading