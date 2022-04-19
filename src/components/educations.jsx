import React, { Component } from 'react';
import Education from './education';

class Educations extends Component {
    state = {
        courses: [
            { id: 1, courseName: "Bachelor of Engineering in Computer Science", instituteName: "Saffrony Institute of Technology", board: "GTU", passingYear: '2011 - 2015' }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col'>
                        <h2>
                            Educations
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {
                            this.state.courses.map(course => <ul key={course.id}><Education
                                key={course.id}
                                currentCourse={course}
                            /></ul>)
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Educations;
