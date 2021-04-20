import React from 'react';

const WorkDetail = ({work}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '75px'}} src={work.img} alt=""/>
            <h4 style={{ color: "#46475c" }} className="mt-5 mb-3">{work.title}</h4>
            <p style={{ color: "#46475c" }}>{work.about}</p>
        </div>
    );
};

export default WorkDetail;