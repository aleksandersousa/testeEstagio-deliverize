import React, { Component } from "react"
import '../styles/CheckBox.css'

export default class CheckBox extends Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: true }
  }

  toggleChange = () => this.setState({ isChecked: !this.state.isChecked })

  render() {
    return (
      <label className="radio">
        <span className="radio__label">{this.props.title}</span>
        <span className="radio__input">
          <input 
            type="radio" 
            name="option"
            value={this.props.option}
            onChange={this.toggleChange.bind(this)}
          />
          <span className="radio__control"></span>
        </span>
      </label>
    );
  }
}
