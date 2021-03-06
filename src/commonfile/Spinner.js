import React from 'react';
import { css } from '@emotion/core';

import ClipLoader from 'react-spinners/DotLoader';

const override = css`
    display: block;
    margin: 30px auto;
    border-color: #005197;
    margin-top: 45vh;
`;

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={40}
                    color={'#005197'}
                    loading={this.state.loading}

                />
            </div>
        )
    }
}

export default Spinner