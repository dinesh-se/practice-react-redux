import React from 'react';

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </header>
);


export default Header;