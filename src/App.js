import React, { Component } from "react";
import { Transition, animated } from "react-spring";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    showComponentThree: false
  }

  toggle = e => this.setState({ showComponentThree: !this.state.showComponentThree });

  render() {
    return (
      <div className="App">
        <ComponentOne />
        <ComponentTwo toggle={this.toggle} />
        <Transition native items={this.state.showComponentThree} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
        { show => show && (props => (
          <animated.div style={props}>
            <ComponentThree />
          </animated.div>
        )) }
        </Transition>
        <Footer />
      </div>
    );
  }
}

export default App;
