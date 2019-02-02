import React from 'react';
import Option from './Option';

const Options = (props) => (
    <section>
        <div className='widget-header'>
            <h3>Your Options</h3>
            <button
                className='button button--link'
                onClick={props.removeAll}
            >
                Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className='widget-message'>Please add options to start.</p>}
        <section>
            {
                props.options.map((option, index) => {
                    return <Option
                        key={index}
                        count={index + 1}
                        optionText={option}
                        removeOption={props.removeOption}
                    />
                })
            }
        </section>
    </section>
)

export default Options;