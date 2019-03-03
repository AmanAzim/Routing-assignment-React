import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";

class Course extends Component {
    state={
        courseTitle:null,
    }
    componentDidMount() {
        const query=new URLSearchParams(this.props.location.search);
        let token = query.get('course')

        //for (let param of query.entries()) {
           // this.setState({courseTitle:param[1]})
        //}
       this.setState({courseTitle:token})
    }

    render () {

        return (
            <div onClick={this.props.clicked}>
                <h1>{this.props.courseTitle}{this.state.courseTitle}</h1>
                <p>You selected the Course with ID:{this.props.courseId}{this.props.match.params.kd}</p>
            </div>
        );
    }
}

export default withRouter(Course);
