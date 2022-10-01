import React, { Component } from 'react';
import Experience from './experience';
import ExperienceData from '../data/experience.json';

class Experiences extends Component {
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
                <div className="row">
                    <div className="col-lg offset-2">
                        <p style={this.titleStyle}><span>
                            EXPERIENCES</span>
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg offset-2'>
                        {
                            ExperienceData.map((exp, index) => {
                                return <div className='p-2' key={exp.id}><Experience
                                    key={exp.id}
                                    xp={exp}
                                /></div>
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Experiences;