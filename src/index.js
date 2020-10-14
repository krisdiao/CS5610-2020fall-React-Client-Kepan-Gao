import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import CourseListComponent from "./components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./components/CourseEditorComponent";
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
    <CourseManagerComponent/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
