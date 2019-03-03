import React, { Component } from 'react';
import {withRouter, Route, Link} from "react-router-dom";
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse:null,
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.selectedCourse)
        {
            this.setState({ selectedCourse:null})
        }
    }

    selectCourseHandler=(id)=>{
        let selectedCourse=this.state.courses.find(course=>{
            return course.id===id;
        });
        console.log(selectedCourse);
        this.setState({selectedCourse:selectedCourse})
    };

    render () {

        let current=(
                this.state.courses.map( course => {
                    return(
                        <Link to={'/courses/'+course.id} exact key={course.id}>
                            <Course className="Course"
                                    courseId={course.id}
                                    clicked={()=>this.selectCourseHandler(course.id)} />
                        </Link>
                    );
                } )
        );
        if(this.state.selectedCourse)
        {
            current=<Course className="Course"
                            courseId={this.state.selectedCourse.id}
                            clicked={()=>this.selectCourseHandler(this.state.selectedCourse.id)}/>
        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {current}
                </section>
            </div>
        );
    }
}

export default Courses;
