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
        //console.log(prevState.selectedCourse);
        //console.log( this.state.selectedCourse);
        if(this.state.selectedCourse && prevState.selectedCourse === this.state.selectedCourse)
        {
            this.setState({selectedCourse:null});
            //console.log('working')
        }
    }

    selectCourseHandler=(id)=>{
        let selectedCourse=this.state.courses.find(course=>{
            return course.id===id;
        });
        this.setState({selectedCourse:selectedCourse})
    };

    render () {

        let current=(
                this.state.courses.map( course => {
                    return(
                        <Link to={this.props.match.url+'/'+course.id+'?course='+course.title} exact key={course.id}>
                            <Course className="Course"
                                    courseId={course.id}
                                    courseTitle={course.title}
                                    clicked={()=>this.selectCourseHandler(course.id)} />
                        </Link>
                    );
                } )
        );
        if(this.state.selectedCourse)
        {
            //current= ( <Route path={this.props.match.url+'/:kd'} exact component={Course}/>

                       // <Link to={'/courses/'+this.state.selectedCourse.id}>
                         // <Course className="Course"
                           //       courseId={this.state.selectedCourse.id}/>
                        ///</Link>
                     //);
        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {current}
                </section>
                {/* */}
                <Route path={this.props.match.url+'/:kd'} exact component={Course}/>

            </div>
        );
    }
}

export default withRouter(Courses);
