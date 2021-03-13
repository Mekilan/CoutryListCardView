import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountryList } from '../actions/countryListAction';


class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getcountrylist: [],
            searchval: '',
            showselectedicon: false
        }
    }
    componentDidMount() {
        this.setState({ getcountrylist: [] }, async () => {
            let data = await this.props.fetchCountryList();
            this.setState({ getcountrylist: this.props.getcounlist });
            this.props.callbackglobal(this.props.getcounlist);
        });
    }

    onCardClick = (evt) => {
        let currentval = evt.currentTarget.attributes.value.value;
        let arr = [];
        arr = this.props.getcounlist.filter(item => { return item.name === currentval });
        if (arr.length != 0) {
            this.props.callback(arr);
            this.setState({ showselectedicon: true });
        }
    }

    renderCountryList() {
        const arrdata = this.props.allcoundata.length != 0 ? this.props.allcoundata : this.state.getcountrylist;
        return arrdata.map(item => {
            return (
                <React.Fragment key={item.name} >
                    <div className="col-md-4 mb-3" value={item.name} onClick={this.onCardClick}>
                        <div className="card">
                            <div className="card-header">
                                <div className="img-card">
                                    <img src={item.flag} className="card-img-top" alt={item.name} /></div>
                                <div className="header">
                                    <h3 className="card-title">{item.name}</h3>
                                    <h5 className="card-title">{item.capital}</h5>
                                </div>
                            </div>

                            <div className="card-body p-content">
                                <p>Population</p>
                                <h3>{item.population}</h3>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        })
    }

    render() {
        return (
            <div className="cus-row">
                <div className="row">
                    {this.renderCountryList()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { getcounlist: state.getcounlist };
}
export default connect(mapStateToProps, { fetchCountryList })(CountryList);