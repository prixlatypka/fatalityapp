import React from "react";
import Index from "pages/login";
import Index1 from "pages/reg1";
import Index11 from "pages/reg2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/login' component={Login}/>
			<Route exact path='/reg1' component={Reg1}/>
			<Route exact path='/reg2' component={Reg2}/>
        </Switch>
    </Router>
);
