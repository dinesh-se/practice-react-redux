import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    addOption = (e) => {
        e.preventDefault();
        let option = e.target.elements.optionInput.value.trim();
        let error = this.props.addOption(option);
        e.target.elements.optionInput.value = '';

        this.setState(() => ({ error }))
    };

    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form
                    className='add-option'
                    onSubmit={this.addOption}
                >
                    <input className='add-option--input' type="text" name="optionInput"></input>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}