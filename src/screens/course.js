import React, {useState} from "react";

import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";

function CoursePage(props){

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            about: "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future.<br />Hope you'll get some really usefull stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",            
            poster: Course1,

            videos: [
                {
                    ID: 1,
                    title: "Introduction",
                    duration: "03 min 24 secs"                    
                },
                {
                    ID: 2,
                    title: "Getting Started",
                    duration: "09 min 55 secs"                    
                },
                {
                    ID: 1,
                    title: "The Illustration",
                    duration: "62 mins 48 secs"                    
                }
            ]
        }
    );

   // const courseID = props.match.params.courseid;

    var courseVideos = [];


    for(let i = 0; i < course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>            
        );
    }
    
    return (
        <div class="conatiner">
            <div class="row">

         <div class="col-md-6">
                
        <div className="course-page rel flex">


            <div className="course-info rel">

                <div className="tutor rel aic flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                        <h2 className="s13 uname fontn c777">Course Tutor</h2>
                    </div>
                </div>
                
              
                <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.title}</h2>
                    <p class="text-md-small"className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: course.about}} />
    

                 
                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span  className="fontn">Achievements</span></h2>
                        <div className="course-stats aic flex">
                            <div className="stats-box flex">
                                <div className="ico ico-points s24 icon-shield" />
                                <h2 className="val s15 c333 fontb">1800</h2>
                                <h2 className="lbl s13 c777">points</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">45.3%</h2>
                                <h2 className="lbl s13 c777">complete</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">+26</h2>
                                <h2 className="lbl s13 c777">level</h2>
                            </div>
                        </div>
                    </div>
                    </div>

                    

                </div>

            </div>

            </div>

            <div class="col-md-6">

            <div className="course-preview rel">

            <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
             </iframe>



                <div className="extras-block rel flex">

                <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/61538632-dcbb-4800-b274-22fd0ab33f9f">
</iframe>
      
                </div>

            </div>
           
            </div>
            </div>
            </div>
            
    )
}

export default CoursePage;