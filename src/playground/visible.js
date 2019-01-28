class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            buttonText: 'Show Details'
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
                buttonText: prevState.visible ? 'Hide Details' : 'Show Details'
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.buttonText}</button>
                { this.state.visible && <p>Hey! These are some details you can see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visible = false;

// const toggleVisibility = () => {
//     visible = !visible;
//     dynamicRender();
// };

// const dynamicRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visible ? 'Hide details' : 'Show details'}</button>
//             { visible && <p>Hey! These are some details you can see!</p>}
//         </div>
//     );
//     ReactDOM.render(<Visibility />, document.getElementById('app'));
// };

// dynamicRender();