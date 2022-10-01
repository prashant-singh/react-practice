import React, { Component, useSyncExternalStore } from 'react';

class Profile extends Component {
    profileStyle = {
        backgroundColor: '#ffe14d'
    }
    render() {

        return (
            <React.Fragment>
                <div style={this.profileStyle}>
                    <div className="row">
                        <div className="col offset-2">
                            <h1>
                                PRASHANT SINGH
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col offset-2'>
                            <h5 className='small'>
                                Sr. Software Engineer
                                @ Byju's
                            </h5>
                            <h5 className='small'>
                                Ahmedabad, Gujarat, IN
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Profile;