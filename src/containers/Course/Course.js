import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";
import queryString from 'query-string';

class Course extends Component {
    state={
        courseTitle:'React',
        courseId:1,
    };
    componentDidMount() {
       this.loadData();
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
       // this.loadData();
    };

    loadData=()=>{
        //const query=new URLSearchParams(this.props.location.search);
        const query = queryString.parse(this.props.location.search);
        const title = query.course;
        console.log(title);

        //for (let param of query.entries()) {
        // this.setState({courseTitle:param[1]})
        //}
        if(this.state.courseId!==+this.props.match.params.kd){
            this.setState({courseTitle:title, courseId:+this.props.match.params.kd});
        }
    };

    render () {
        {/*let Title=this.props.courseTitle;
        if(this.state.courseTitle){
            Title=this.state.courseTitle
        }

        let Id=this.props.courseId;
        if(this.state.courseId){
            Id=this.state.courseId;
        }*/}

        console.log('Course props', this.props);
        return (
            <div >
                <h1 data-testid="course-heading">{this.state.courseTitle}</h1>
                <p>You selected the Course with ID:{this.state.courseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);
