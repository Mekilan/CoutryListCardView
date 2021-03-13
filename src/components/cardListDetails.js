import React, { Component } from 'react';

class cardListDetails extends Component {
    constructor(props) {
        super(props);

    }
    onClose = () => {
        this.props.callback(false);
    }
    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: this.props.modalopen ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="img-card">
                                <img src={this.props.detaillist.flag} className="card-img-top" alt={this.props.detaillist.name} /></div>
                            <h5 className="modal-title">{this.props.detaillist.name}</h5>
                            <button type="button" className="close modal-close" data-dismiss="modal" aria-label="Close" onClick={this.onClose}>
                                <span aria-hidden="true" className="modal-span-times">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li className="mb-1">
                                    <span className="d-head">Capital:</span><span className="d-content" title={this.props.detaillist.capital}> {this.props.detaillist.capital}</span>
                                </li>
                                <li className="mb-1">
                                    <span className="d-head">AlphaCode:</span><span className="d-content" title={this.props.detaillist.alpha2Code}> {this.props.detaillist.alpha2Code}</span>
                                </li>
                                <li className="mb-1">
                                    <span className="d-head">Region:</span><span className="d-content" title={this.props.detaillist.region}> {this.props.detaillist.region}</span>
                                </li>
                                <li className="mb-1">
                                    <span className="d-head">SubRegion:</span><span className="d-content" title={this.props.detaillist.subregion}> {this.props.detaillist.subregion}</span>
                                </li>
                                <li className="mb-1 txt-overflow">
                                    <span className="d-head">TimeZones: </span><span className="d-content" title={this.props.detaillist.timezones}>{this.props.detaillist.timezones}</span>
                                </li>
                                <li className="mb-1">
                                    <span className="d-head">Population: </span><span className="d-content" title={this.props.detaillist.population}>{this.props.detaillist.population}</span>
                                </li>
                                {this.props.detaillist.currencies != undefined ?
                                    <li className="mb-1">
                                        <span className="d-head">Currencies: </span><span className="d-content" title={this.props.detaillist.currencies[0].name}>{this.props.detaillist.currencies[0].name},{this.props.detaillist.currencies[0].symbol}</span>
                                    </li> : null}
                                {this.props.detaillist.numericCode != undefined ?
                                    <li className="mb-1">
                                        <span className="d-head">NumericCode: </span><span className="d-content" title={this.props.detaillist.numericCode}>{this.props.detaillist.numericCode}</span>
                                    </li> : null}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default cardListDetails;
