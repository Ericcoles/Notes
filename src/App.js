import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Form change={this.inputHandler} submit={this.popUpHandler} />
        <View {...this.state.inputData} />
        {this.state.showPopup && (
          <Popup close={this.popUpHandler} {...this.state.inputData} />
        )}
      </div>
    );
  }
}

export default App;

/* // firstname={this.state.inputData.firstname}
          // lastname={this.state.inputData.lastname}
          // phone={this.state.inputData.phone}
          // role={this.state.inputData.role}
          // message={this.state.inputData.message} */
