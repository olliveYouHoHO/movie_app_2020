import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    // <a href="/">Home</a> = 리액트가 죽고 새 페이지가 열림
    // --> react-router-dom의 Link컴포넌트 사용
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
