import React, { Component } from 'react';

class Experience extends Component {
    state = {}
    positionStyle =
        {
            fontSize: 15,
            fontWeight: 'light',
        }

    dateStyle = {
        fontSize: 12,
        fontWeight: 'bold',
    }

    summaryStyle = {
        fontSize: 14,
        fontWeight: 'light',
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h5 style={this.positionStyle}>
                            {this.props.xp.position}
                            <small className="text-muted"> @ {this.props.xp.companyName}</small>
                        </h5>
                    </div>
                    <div className='col-lg-2'>
                        <h6 style={this.dateStyle}>
                            {this.props.xp.startDate} - {this.getEndDate(this.props.xp.endDate)}
                        </h6>
                    </div>
                </div>
                <div className='row px-2'>
                    <a href={this.props.xp.webURL}>{
                        this.props.xp.webURL
                    }
                    </a>
                    <div style={this.summaryStyle} className='col-lg-8'>
                        {this.props.xp.summary}
                    </div>
                </div>
            </React.Fragment>
        );
    }
    getEndDate(endDate) {
        return endDate == null ? "Present" : endDate;
    }
}

export default Experience;