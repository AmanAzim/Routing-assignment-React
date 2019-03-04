import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";

class Course extends Component {
    state={
        courseTitle:null,
        courseId:null,
    }
    componentDidMount() {
       this.loadData();
        console.log('Mounting')
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
            this.loadData();
    }

    loadData=()=>{
        const query=new URLSearchParams(this.props.location.search);
        let title = query.get('course');

        //for (let param of query.entries()) {
        // this.setState({courseTitle:param[1]})
        //}
        if(this.state.courseId!==+this.props.match.params.kd){
            this.setState({courseTitle:title, courseId:+this.props.match.params.kd});
        }

    }

    render () {

        {/*let Title=this.props.courseTitle;
        if(this.state.courseTitle){
            Title=this.state.courseTitle
        }

        let Id=this.props.courseId;
        if(this.state.courseId){
            Id=this.state.courseId;
        }*/}


        return (
            <div >
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID:{this.state.courseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);
