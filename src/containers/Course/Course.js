import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div onClick={this.props.clicked}>
                <h1>{this.props.courseTitle}</h1>
                <p>You selected the Course with ID:{this.props.courseId}</p>
            </div>
        );
    }
}

export default Course;
