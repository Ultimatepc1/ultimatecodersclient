import React,{Component} from 'react'
import {coursedetail} from './UserFunctions'

class CoursePage extends Component{
    constructor(){
        super()
        this.state = { course : [] };
    }
    componentWillMount(){
        const token=localStorage.usertoken
        if(token==null){
            this.props.history.push('/login')
        }else{
        let routeid = this.props.match.params.id;
        //console.log("route"+routeid)
        let routeobject={'routeid': routeid}
        coursedetail(routeobject).then(res => {
            console.log(res);
            //this.setState({course : res},()=>{ console.log(this.state.course+ 'dealersOverallTotal1');});
            //console.log(this.state.course)

            this.changeHandler(res)
        }).catch(err=> {
            console.log("registererror "+err)
        });
    }
    }
    async changeHandler(res) {
        await this.setState({ course: res });
        console.log("change printing"+this.state.course);
    }
    render(){
        var courseVideos = [];
        if(this.state.course.videos != null){
        for(let i = 0; i < this.state.course.videos.length; i++){
            courseVideos.push(
                <a href="#" key={"course-video-" + i} className="noul aic rel flex">
                    <div className="id s18 fontn cfff">{this.state.course.videos[i].id}</div>
                    <div className="meta rel">
                        <h1 className="s15 lbl fontb c333">{this.state.course.videos[i].title}</h1>
                        <h1 className="s13 dur fontn c777">{this.state.course.videos[i].duration}</h1>
                    </div>
                </a>            
            );
        }
    }
    return(
        <div className="container">
            
           
           

                
            {this.state.course.tutor  &&
           
            <div className="course-page rel flex">
                <div class="col-md-4 col-md-offset-0 ml-0">


<div className="course-info rel">

    <div className="tutor rel aic flex">
        <div className="pic">
            <img src={this.state.course.tutor.dp} className="bl" />
        </div>
        <div className="meta rel">
            <h2 className="s15 name fontb c333">{this.state.course.tutor.name}</h2>
            <h2 className="s13 uname fontn c777">Course Tutor</h2>
        </div>
    </div>

    <div className="course-meta">
        <h2 className="s24 title fontb c333">{this.state.course.title}</h2>
        <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: this.state.course.description}} />

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


<div className="course-preview rel">
<div class="col-md-8 col-md-offset-0 ml-0">

    <div className="player rel">
    <iframe width="700px" height="300px" src="https://www.youtube.com/embed/tgbNymZ7vqY">
             </iframe>
    </div>

    <div className="extras-block rel flex">

        <div className="chat rel">
        <iframe
        
    allow="microphone;"
    width="350"
    height="300"
    
    src="https://console.dialogflow.com/api-client/demo/embedded/61538632-dcbb-4800-b274-22fd0ab33f9f">
</iframe>
      
        </div>
        </div>

    </div>
    </div>



</div>}
{this.state.course == [] && <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Welcome to PC's Site</h1>
                    <p className="text-center">This site is created using React JS,Flask and Xampp MySQL Database</p>
                </div>
               
            </div>}
            </div>
           
       
        )
    }
}

export default CoursePage