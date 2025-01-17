import React from 'react';
import './Jia.css';

function Legend() {
    return (<div style={{ 'marginLeft': "20px"}}>
        <div className="OperationItemBody" style={{ width: "100px", background: "#508EEE", textAlign: 'center' }}>手术中</div>
        <div className="OperationItemBody" style={{ width: "100px", background: "#EB84C0", textAlign: 'center' }}>复苏中</div>
        <div className="OperationItemBody" style={{ width: "100px", background: "#74EDDA", textAlign: 'center' }}>清洁中</div>
    </div>);
}

export default Legend;