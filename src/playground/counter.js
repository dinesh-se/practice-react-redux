class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    try {
      const counter = localStorage.getItem('count');
      if (counter && !isNaN(counter)) {
        this.setState( () => ({ count: parseInt(counter, 10)}));
      }
    } catch(e) {
      console.log('Error in retrieving data', e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });

  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

// setting default props value
// Counter.defaultProps = {
//   count: 25
// };

ReactDOM.render(<Counter />, document.getElementById('app'));