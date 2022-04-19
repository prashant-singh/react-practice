import React, { Component } from 'react';

class Education extends Component {
    state = {}

    courseNameStyle = {
        fontSize: 15
    }

    instituteStyle = {
        fontSize: 15,
        color: 'grey',
        fontFamily: 'sans-serif'
    }

    dateStyle = {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    }

    render() {
        return (
            <React.Fragment>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <h5 style={this.courseNameStyle}>
                            {this.props.currentCourse.courseName}
                        </h5>
                        <h5 style={this.instituteStyle}> @ {this.props.currentCourse.instituteName}
                            <small className='text-muted'>
                                &nbsp;|&nbsp;{this.props.currentCourse.board}
                            </small>
                        </h5>
                    </div>
                    <div className='col-6'>
                        <h6 style={this.dateStyle}>
                            {this.props.currentCourse.passingYear}
                        </h6>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Education;