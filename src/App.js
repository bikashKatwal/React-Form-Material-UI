import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Form from "./Form";

injectTapEventPlugin();

class App extends Component {
    state ={
      fields:{}
    };


    onChange = (updatedValue) =>{
        console.log("Updated value",updatedValue);
        this.setState({
            fields:{
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <Form onChange={this.onChange.bind(this)}/>
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
