import React, { Component } from 'react';
import CountryList from './CountryList';
import Detail from './cardListDetails';
import Search from './search';
import Spinner from '../commonfile/Spinner';

let globlist = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchval: '',
            getcontdetail: {},
            openmodal: false,
            allcountrylist: []
        }
    }
    callBackData = (data) => {
        this.setState({ getcontdetail: data[0], openmodal: true });
    }
    globalCallBack = (data) => {
        globlist = data;
    }
    callBackFun = (data) => {
        this.setState({ openmodal: data });
    }
    callBackSearch = (data) => {
        let arr = globlist.filter(item => {
            return item.name.toLowerCase().indexOf(data.toLowerCase()) !== -1;
        });
        this.setState({ allcountrylist: arr });
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container">
                        <Search callback={this.callBackSearch} />
                    </div>
                </header>
                <div className="container" style={{ opacity: this.state.openmodal ? '0.5' : '' }}>
                    <CountryList searchdata={this.state.searchval} allcoundata={this.state.allcountrylist} callback={this.callBackData} callbackglobal={this.globalCallBack} />
                </div>
                {this.state.getcontdetail.length != 0 ?
                    <Detail detaillist={this.state.getcontdetail} modalopen={this.state.openmodal} callback={this.callBackFun} /> : null
                }
                {globlist.length == 0 ?
                    <Spinner /> : null}
            </React.Fragment>

        );
    }
}
export default App;