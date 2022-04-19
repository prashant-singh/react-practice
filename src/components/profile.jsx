import React, { Component } from 'react';

const Profile = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h1>
                        Prashant Singh
                    </h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h5 className='lead'>
                        Sr. Software Engineer
                        <small className="text-muted"> @ Byju's</small>
                    </h5>
                    <h5 className='small'>
                        Ahmedabad, Gujarat, IN
                    </h5>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;