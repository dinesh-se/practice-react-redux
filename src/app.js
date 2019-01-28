class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.removeAll = this.removeAll.bind(this);
        this.decision = this.decision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            if (json) {
                this.setState(() => ({
                    options: JSON.parse(json)
                }));
            }
        } catch(e) {
            console.log('Can\'t retrieve data', e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    addOption(option) {
        if (!option) {
            return 'Enter valid item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Enter unique item';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    removeAll() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        //simplified version of above - es6 way
        this.setState(() => ({ options: [] }));
    }

    removeOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    decision() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
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
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    );
}

const Action = (props) => {
    return (
        <button
            onClick={props.decision}
            disabled={!props.hasOptions}>
            What should I do?
        </button>
    );
};

const Options = (props) => {
    return (
        <section>
            {props.options.length === 0 && <p>Please add options to start.</p>}
            <button onClick={props.removeAll}>Remove All</button>
            <ol>
                {
                    props.options.map((option, index) => {
                        return <Option
                            key={index}
                            optionText={option}
                            removeOption={props.removeOption}
                        />
                    })
                }
            </ol>
        </section>
    );
};

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button
                onClick={() => props.removeOption(props.optionText)}
            >
                Remove
            </button>

        </li>
    );
};

class AddOption extends React.Component {
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

ReactDOM.render(<Indecision />, document.getElementById('app'));