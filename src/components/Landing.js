// import React,{Component} from 'react'
// import {home} from './UserFunctions'
// import {
//     NavLink,    
// } from "react-router-dom";

// class Landing extends Component{
//     constructor(){
//         super()
//         this.state = {'popularCourse' : [],
//                        'topTutors': []
//         }
//     }
//     componentWillMount(){
//         home().then(res =>{
//                 console.log(res)
//                 var i=0;
//                 var tut=[]
//                 for(i=0;i<res.length;i++){
//                     tut.push(res[i].tutor)
//                 }
//                 this.setState({'popularCourse' : res, 'topTutors' : tut})
//                 console.log(this.state.popularCourse)
//                 console.log(this.state.topTutors)
//         })
//     }
//     render(){
//         var courseList = [];
//         for(let i = 0; i < this.state.popularCourse.length; i++){
//             courseList.push(
//                 <NavLink to={"/users/course/" + this.state.popularCourse[i].id} className="course rel" key={"popular-course-" + i}>
//                     <div className="block rel" style={{
//                         background: "#e2e2e2 url(" + this.state.popularCourse[i].poster +") no-repeat center"
//                     }}>
    
//                         <div className="user abs aic flex">
//                             <div className="pic">
//                                 <img src={this.state.popularCourse[i].tutor.dp} className="bl" />
//                             </div>
//                             <div className="meta rel">
//                                 <h2 className="s15 name fontb cfff">{this.state.popularCourse[i].tutor.name}</h2>
//                                 <h2 className="s13 uname fontn cfff">@{this.state.popularCourse[i].tutor.email}</h2>
//                             </div>
//                         </div>
    
//                         <div className="dura abs">
//                             <h2 className="s13 name fontb cfff">{this.state.popularCourse[i].duration}</h2>
//                         </div>
    
//                         <div className="course-title abs">
//                             <h2 className="s15 name fontb cfff">{this.state.popularCourse[i].title}</h2>
//                         </div>
    
//                     </div>
//                 </NavLink>
//             );
//         }
//         var topTutorsList = [];
//         for(let i = 0; i < this.state.topTutors.length; i++){
//             topTutorsList.push(
//                 <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
//                     <div className="user aic flex">
//                         <div className="pic">
//                             <img src={this.state.topTutors[i].dp} className="bl" />
//                         </div>
//                         <div className="meta rel">
//                             <h2 className="s15 name fontb c333">{this.state.topTutors[i].name}</h2>
//                             <h2 className="s13 uname fontn c333">@{this.state.topTutors[i].email}</h2>
//                         </div>
//                     </div>                
//                 </a>
//             );
//         }
//         return(
//         <div className="container">
//             {/* {<div className="jumbotron mt-5">
//                 <div className="col-sm-8 mx-auto">
//                     <h1 className="text-center">Welcome to PC's Site</h1>
//                     <p className="text-center">This site is created using React JS,Flask and Xampp MySQL Database</p>
//                 </div>
//             </div>} */}

//             {/**Popular Courses */}
//             <div className="section section-b rel">
//                 <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
//                 <div className="courses rel flex">
//                     {courseList}
//                 </div>
//             </div>
//             {/**Top Tutors */}
//             <div className="section section-b rel">
//                 <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
//                 <div className="top-tutors rel flex">
//                     {topTutorsList}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// export default Landing

//CSS imports
import '../css/App.css';
import '../css/props.css';
import '../css/uifont.css';  


import React,{Component} from 'react'
import {home} from './UserFunctions'

//Screens
import Rightbar from "../screens/rightbar";
import Sidebar from '../screens/sidebar'


import {
    NavLink,    
} from "react-router-dom";

class Landing extends Component{
    constructor(){
        super()
        this.state = {'popularCourse' : [],
                       'topTutors': []
        }
    }
    componentWillMount(){
        home().then(res =>{
                console.log(res)
                var i=0;
                var tut=[]
                for(i=0;i<res.length;i++){
                    tut.push(res[i].tutor)
                }
                this.setState({'popularCourse' : res, 'topTutors' : tut})
                console.log(this.state.popularCourse)
                console.log(this.state.topTutors)
        })
    }
    render(){
        //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 7; i++){
        tutorList.push(
            <div class="col-md-1">
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
            </div>
        );
    }
        var courseList = [];
        for(let i = 0; i < this.state.popularCourse.length; i++){
            courseList.push(
                <div class="container">
                <NavLink to={"/users/courses/" + this.state.popularCourse[i].id} className="course rel" key={"popular-course-" + i}>
                    <div className="block rel" style={{
                        background: "#e2e2e2 url(" + this.state.popularCourse[i].poster +") no-repeat center"
                    }}>
    
                        <div className="user abs aic flex">
                            <div className="pic">
                                <img src={this.state.popularCourse[i].tutor.dp} className="bl" />
                            </div>
                            <div className="meta rel">
                                <h2 class="text-md-small"className="s10 name fontb c333">{this.state.popularCourse[i].tutor.name}</h2>
                                <h2 class="text-md-small"className="s8 uname fontn c333">@{this.state.popularCourse[i].tutor.email}</h2>
                            </div>
                        </div>
    
                        <div className="dura abs">
                            <h2 class="text-md-small" className="s10 name fontb c333">{this.state.popularCourse[i].duration}</h2>
                        </div>
    
                        <div className="course-title abs">
                            <h2 class="text-md-small"className="s10 name fontb c333">{this.state.popularCourse[i].title}</h2>
                        </div>
                     </div>
                   
                </NavLink>
                </div>
            );
        }
        var topTutorsList = [];
        for(let i = 0; i < this.state.topTutors.length; i++){
            topTutorsList.push(
                <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                    <div className="user aic flex">
                        <div className="pic">
                            <img src={this.state.topTutors[i].dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 class="text-md-small" className="s15 name fontb c333">{this.state.topTutors[i].name}</h2>
                            <h2 class="text-md-small" className="s13 uname fontn c333">@{this.state.topTutors[i].email}</h2>
                        </div>
                    </div>                
                </a>
            );
        }
        return(
            <div className="App flex">
                <div className="container">
                <div class="row">
                 <div class="col-md-3 col-md-offset-0 ml-0">
                       <Sidebar/>
                 </div>
                 <div class="col-md-6 ">
                    <div className="app-content">
                    <div className="home-page rel">

{/**Tutors Live Now */}
<div class="row">
<div className="section rel" >
    <h2 className="title s24 fontb">Streaming <span  className="fontn">Now</span></h2>
    <div className="tutors rel flex">
        {tutorList}
    </div>
</div>
</div>

{/**Popular Courses */}

<div className="section section-b rel">
    <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
    <div className="courses rel flex">
       
        {courseList}
        
    </div>
</div>


{/**Top Tutors */}
<div className="section section-b rel">
    <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
    <div className="top-tutors rel flex">
        {topTutorsList}
    </div>
</div>

</div>
                          
                    </div>
                 </div>
                <div class="col-md-3">
                    <Rightbar/>
                   
                </div>
               </div>
           

                 </div>
        </div>
        )
    }
}

export default Landing