import React, { Component } from "react";
import { Spring } from "react-spring";

export class ComponentTwo extends Component {
  render() {
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
            { props => (
            <div style={props}>
                <div style={cTwoStyle}>
                    <h1>Component Two</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusamus distinctio nobis!
                        Perferendis nesciunt, aspernatur eum doloremque molestiae tempora. A illo, reprehenderit earum
                        perspiciatis nemo placeat magnam id beatae blanditiis?
                        <br />
                        <br />
                        <strong>Click the button below to toggle Component Three</strong>.
                    </p>
                    <button style={btn} onClick={this.props.toggle}>Toggle Component Three</button>
                </div>
            </div>
            ) }
        </Spring>
    );
  }
}

const cTwoStyle = {
    background: "#4679b4",
    color: "white",
    padding: "1.5rem"
};

const btn = {
    background: "#262626",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    textTransform: "uppercase",
    margin: "15px 0"
};

export default ComponentTwo;
