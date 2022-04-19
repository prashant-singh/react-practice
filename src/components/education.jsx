import React, { Component } from 'react';

class Education extends Component {
    state = {}

    courseNameStyle = {
        fontSize: 15,
        fontWeight:'light'
    }

    instituteStyle = {
        fontSize: 14,
    }

    dateStyle = {
        fontSize: 12,
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col'>
                        <h5 style={this.courseNameStyle}>
                            {this.props.currentCourse.courseName}
                        </h5>
                        <h5 style={this.courseNameStyle}> @ {this.props.currentCourse.instituteName}
                            {/* <small className='text-muted'> */}
                                &nbsp;|&nbsp;{this.props.currentCourse.board}
                            {/* </small> */}
                        </h5>
                    </div>
                    <div className='col'>
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