import React from "react";

export default function ComponentThree() {
    return (
        <div style={cThreeStyle}>
            <h1>Component Three</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusamus distinctio nobis!
                Perferendis nesciunt, aspernatur eum doloremque molestiae tempora. A illo, reprehenderit earum
                perspiciatis nemo placeat magnam id beatae blanditiis?
            </p>
        </div>
    );
}

const cThreeStyle = {
    background: "#4670b4",
    color: "#fff",
    padding: "1.5rem"
};
