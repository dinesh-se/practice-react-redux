import React from 'react';
import Option from './Option';

const Options = (props) => (
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
)

export default Options;