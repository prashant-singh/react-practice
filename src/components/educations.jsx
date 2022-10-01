import React, { Component } from 'react';
import Education from './education';

class Educations extends Component {
    state = {
        courses: [
            { id: 1, courseName: "Bachelor of Engineering in Computer Science", instituteName: "Saffrony Institute of Technology", board: "GTU", passingYear: '2011 - 2015' }
        ]
    }
    titleStyle = {
        backgroundColor: '#000000',
        color: '#ffffff',
        display: 'inline-flex',
        padding: '4px',
        fontSize: '8pt',
        marginTop: '10pt'
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col offset-2'>
                        <p style={this.titleStyle}>
                            EDUCATIONS
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col offset-2'>
                        {
                            this.state.courses.map(course => <div className='p-2' key={course.id}><Education
                                key={course.id}
                                currentCourse={course}
                            /></div>)
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Educations;
