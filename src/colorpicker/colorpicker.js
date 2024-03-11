import React, { Component } from 'react';
 
class ColourPickerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white' 
        };
    }
 
    componentDidMount() {
        const savedColor = localStorage.getItem('backgroundColor');
        if (savedColor) {
            this.setState({ backgroundColor: savedColor });
        }
    }
 
    saveColor = (color) => {
        localStorage.setItem('backgroundColor', color);
        this.setState({ backgroundColor: color });
    }
 
    render() {
        return (
            <div> <center>
                <h2> Color Picker App </h2>
                <button className='p-2 bg-red-500 px-10 rounded font-semibold m-2' onClick={() => this.saveColor('red')}>Red</button>
                <button className='p-2 bg-green-500 px-10 rounded font-semibold m-2' onClick={() => this.saveColor('green')}>Green</button>
                <button className='p-2 bg-blue-500 px-10 rounded font-semibold m-2' onClick={() => this.saveColor('blue')}>Blue</button>
                <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-2' onClick={() => this.saveColor('White')}>Reset</button><br/>&nbsp;
                <div id="component" style={{ width: '400px', height: '400px', backgroundColor: this.state.backgroundColor, marginBottom: '20px' }}></div>
                
                </center></div>
        );
    }
}
 
export default ColourPickerApp;