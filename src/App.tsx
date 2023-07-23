import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme,themeToggle} = useTheme();

    return (
        <div className={classNames('app', {},[theme] )}>
            <button onClick={themeToggle} >ToggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About us</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'}  element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;