import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";

class Course extends Component {
    render () {
        console.log(this.props)
        return (
            <div onClick={this.props.clicked}>
                <h1>{this.props.courseTitle}</h1>
                <p>You selected the Course with ID:{this.props.courseId}{this.props.match.params.kd}</p>
            </div>
        );
    }
}

export default withRouter(Course);
