import React, { Component } from 'react';
import Experience from './experience';

class Experiences extends Component {
    state = {
        xps: [
            { id: 1, position: "Senior Software Engineer", companyName: "Byju's", startDate: "March 2022", endDate: "present", webURL: "https://byjus.com", summary: "Joined as a Sr. Software Engineer." },
            { id: 2, position: "Senior Software Engineer", companyName: "Byju's", startDate: "March 2022", endDate: "present", webURL: "https://byjus.com", summary: "Joined as a Sr. Software Engineer." }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-3">
                    <div className="col-6">
                        <h2>
                            Experiences
                        </h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        {
                            this.state.xps.map(x => <ul key={x.id}><Experience
                                key={x.id}
                                xp={x}
                            /></ul>)
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Experiences;