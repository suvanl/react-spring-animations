import React from "react";
import { Spring } from "react-spring";

export default function ComponentOne() {
    return (
        <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
            { props => (
            <div style={props}>
                <div style={cOneStyle}>
                    <h1>Component One</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusamus distinctio nobis!
                        Perferendis nesciunt, aspernatur eum doloremque molestiae tempora. A illo, reprehenderit earum
                        perspiciatis nemo placeat magnam id beatae blanditiis?
                    </p>
                    <Spring from={{ number: 0 }} to={{ number: 10 }} config={{ duration: 10000 }}>
                        { props => (
                            <div style={props}>
                                <h1 style={counter}>
                                    {props.number.toFixed()}
                                </h1>
                            </div>
                        ) }
                    </Spring>
                </div>
            </div>
            ) }
        </Spring>
    );
}

const cOneStyle = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
};

const counter = {
    background: "#3b6a90",
    color: "steelblue",
    textAlign: "center",
    width: "100px",
    borderRadius: "10%",
    margin: "1rem auto"
};
