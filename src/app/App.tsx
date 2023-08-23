import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss"

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {

    const {theme,themeToggle} = useTheme();

    return (
        <div className={classNames('app', {},[theme] )}>
            <button onClick={themeToggle} >ToggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About us</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>} />
                    <Route path={'/'}  element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;