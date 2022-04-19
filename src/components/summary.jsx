import React, { Component } from 'react';
import SummaryData from '../data/summary.json';

class Summary extends Component {
    summaryStyle={
        backgroundColor:'#f1f8ff'
    }

    render() { 
        return (
            <React.Fragment>
                <div style={this.summaryStyle} className="col">
            <p className='m-1'>
                {SummaryData.summary}
            </p>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Summary;