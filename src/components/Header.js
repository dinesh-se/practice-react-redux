import React from 'react';

const Header = (props) => (
    <header className='header'>
        <section className='container'>
            <h1 className='header__title'>{props.title}</h1>
            <h2 className='header__subtitle'>{props.subtitle}</h2>
        </section>
    </header>
);


export default Header;