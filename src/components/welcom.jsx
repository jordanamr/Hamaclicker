import React, { Component } from "react";
import risitas from "../images/risitas.gif";
import "../css/welcom.css";

class Welcom extends Component {
  state = {
    title: "Welcom.",
    loading: true,
    vaccination: 0,
    btnClass: "btn",
    h1Class: "titleAnimation"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }

  view = () => {
    return (
      <div className="welcom">
        <img src={risitas} alt="" />
        <h1> {this.state.title}</h1>
      </div>
    );
  };

  handleVaccination = () => {
    this.setState({ vaccination: this.state.vaccination + 1, btnClass: "btn" });
  };

  handleAnimation = () => {
      this.setState({h1Class: "titleAnimation"})
  }

  render() {
    return (
      <>
        {/* {this.state.loading === true ? (
          this.view()
        ) : ( */}
        <audio src=""></audio>
          <div style={{backgroundImage: `url("https://st2.depositphotos.com/6343304/9178/i/600/depositphotos_91781116-stock-photo-standing-forest-golem-concept-art.jpg")`}} className="welcom">
            <h1 class={this.h1Class} >{this.state.vaccination} doses</h1>
            <button class={this.state.btnClass} onClick={this.handleVaccination}>Vite ma dose</button>
          </div>
        {/* )} */}
      </>
    );
  }
}

export default Welcom;
