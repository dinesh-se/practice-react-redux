import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
      super(props);
      this.addOption = this.addOption.bind(this);
      this.state = {
          error: undefined
      }
  }
  addOption(e) {
      e.preventDefault();
      let option = e.target.elements.optionInput.value.trim();
      let error = this.props.addOption(option);
      e.target.elements.optionInput.value = '';

      this.setState(() => ({ error }))
  }
  render() {
      return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.addOption}>
                  <input type="text" name="optionInput"></input>
                  <button>Add Option</button>
              </form>
          </div>
      );
  }
}