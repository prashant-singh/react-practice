import React, { Component } from 'react';

class Experience extends Component {
    state = {}
    positionStyle =
        {
            fontSize: 15,
            fontWeight: 'light',
            fontFamily: 'sans-serif'
        }

    dateStyle = {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    }

    summaryStyle = {
        fontSize: 14,
        fontWeight: 'light',
        fontFamily: 'sans-serif'
    }

    render() {
        return (
            <React.Fragment>
                {/* <div className='row justify-content-center'>
                    <div className='col-6'> */}
                <h5 style={this.positionStyle}>
                    {this.props.xp.position}
                    <small className="text-muted"> @ {this.props.xp.companyName}</small>
                </h5>
                {/* </div> */}
                {/* <div className='col-6'> */}
                <h6 style={this.dateStyle}>
                    {this.props.xp.startDate} - {this.props.xp.endDate}
                </h6>
                {/* </div>
                </div> */}
                <a href={this.props.xp.webURL}>{
                    this.props.xp.webURL
                }
                </a>
                {/* <div className='row justify-content-center m-2'> */}
                <p style={this.summaryStyle}>
                    {this.props.xp.summary}
                </p>
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export default Experience;