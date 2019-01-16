import React from "react";

export default function Footer() {
    return (
        <div style={footerStyle}>
            <footer>
                This demo uses the <a href="https://react-spring.surge.sh/">react-spring</a> library
                and is based on <a href="https://www.youtube.com/watch?v=S8yn3-WpVV8">this tutorial</a>.
            </footer>
        </div>
    );
}

const footerStyle = {
    color: "#404040",
    padding: "1.5rem"
};
