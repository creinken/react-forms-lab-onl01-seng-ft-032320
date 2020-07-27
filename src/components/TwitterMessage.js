import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
        message: "",
        charsLeft: props.maxChars,
    };
  }

  handleChange = event => {
      this.setState({
          message: event.target.value,
          charsLeft: this.props.maxChars - event.target.value.length
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         name="message"
         id="message"
         onChange={event => this.handleChange(event)}
         value={this.state.message}
        />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
