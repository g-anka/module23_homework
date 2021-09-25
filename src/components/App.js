import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";

function App() {
    return (
        <div className = "App">
            <Switch>
                <Route path="/FAQ">
                    <FAQ />
                </Route>
                <Route path="/">
                    <AboutUs/>
                </Route>
            </Switch>
        </div>

    );
}


export default App;