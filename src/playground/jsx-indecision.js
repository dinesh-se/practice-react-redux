console.log('App is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two']
};

const addOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.optionInput.value;

    if (option) {
        app.options.push(option);
        e.target.elements.optionInput.value = '';
        dynamicRender();
    }
};

const clear = () => {
    app.options = [];
    dynamicRender();
};

const makeDecision = () => {
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
};

const dynamicRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options." : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={clear}>Remove All</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="optionInput"></input>
                <button>Submit</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, document.getElementById('app'));
};

dynamicRender();