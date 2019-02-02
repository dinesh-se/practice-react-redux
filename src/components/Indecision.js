import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import DecisionModal from './DecisionModal';

export default class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    addOption = (option) => {
        if (!option) {
            return 'Enter valid item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Enter unique item';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    removeAll = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        //simplified version of above - es6 way
        this.setState(() => ({ options: [] }));
    };

    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    decision = () => {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        // alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        this.setState({
            selectedOption: option
        });
    };

    closeDecisionModal = () => {
        this.setState({
            selectedOption: undefined
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            if (json) {
                this.setState(() => ({
                    options: JSON.parse(json)
                }));
            }
        } catch (e) {
            console.log('Can\'t retrieve data', e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    decision={this.decision}
                />
                <Options
                    options={this.state.options}
                    removeAll={this.removeAll}
                    removeOption={this.removeOption}
                />
                <AddOption addOption={this.addOption} />
                <DecisionModal 
                    selectedOption={this.state.selectedOption}
                    closeDecisionModal={this.closeDecisionModal}
                />
            </div>
        )
    }
}