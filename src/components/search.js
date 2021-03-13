import React, { Component } from 'react';

class search extends Component {
    constructor(props) {
        super(props);
    }
    onSearch = (evt) => {
        let value = evt.target.value;
        this.props.callback(value);
    }
    render() {
        return (
            <div className="r-top">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <a href='#'><img src="/img/logo-new.png" alt="Logo" width="150" />
                        </a>
                    </div>
                    <div className="col-md-10">
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-100" id="basic-addon1">  <i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <input type="search" placeholder="Search Countries" className="form-control" onChange={this.onSearch} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default search;