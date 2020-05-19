import React from 'react';
import {Header,Button} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import './HomePageComponent.css';
import AddContentComponent from '../AddContent/AddContentComponent';
import DisplayContentComponent from '../DisplayContent/DisplayContentComponent';


function HomePageComponent(){
    return(
        <Router>
            <div className="home_page-container">
                <div className="home_page-navigation">
                    <Header id="navigation-header" as="h1">Navigation</Header>
                    <Button as={Link} to="/add-content" color="blue">Add Content</Button>
                    <Button as={Link} to="/display-content" color="orange">Display Content</Button>
                </div>
                <div className="home_page-body">
                    <Route path="/add-content" component={AddContentComponent}/>
                    <Route path="/display-content" component={DisplayContentComponent}/>
                </div>
            </div>
        </Router>
    )
}

export default HomePageComponent;