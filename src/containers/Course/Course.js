import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";

class Course extends Component {
    state={
        courseTitle:null,
        courseId:null,
    }
    componentDidMount() {
       this.loadData();
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.courseId===this.state.courseId){
            this.loadData();
        }
    }

    loadData=()=>{
        const query=new URLSearchParams(this.props.location.search);
        let token = query.get('course');

        //for (let param of query.entries()) {
        // this.setState({courseTitle:param[1]})
        //}
        this.setState({courseTitle:token, courseId:+this.props.match.params.kd});
    }

    render () {

        let Title=this.props.courseTitle;
        if(this.state.courseTitle){
            Title=this.state.courseTitle
        }

        let Id=this.props.courseId;
        if(this.state.courseId){
            Id=this.state.courseId;
        }


        return (
            <div onClick={this.props.clicked}>
                <h1>{Title}</h1>
                <p>You selected the Course with ID:{Id}</p>
            </div>
        );
    }
}

export default withRouter(Course);
