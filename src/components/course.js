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

        <div className="section section-b rel">                    
            <h2 className="title s24 fontb">Course <span  className="fontn">Details</span></h2>
            <div className="course-videos aic flex">
                {courseVideos}
            </div>
        </div>

    </div>

</div>

<div className="course-preview rel">

    <div className="player rel">
        <video poster={this.state.course.poster} />
        <div className="ctrls abs aic flex">
            <button className="icon-pause s24 pp" />
            <div className="timer rel fontn s15 cfff">
                02:54 / 09:55
            </div>
            <div className="slider rel">
                <div className="prog rel">
                    <div className="bar rel">
                        <div className="knob abs" />
                    </div>
                </div>
            </div>
            <button className="icon-volume-100 s24 vol" />
            <button className="icon-full-screen-enter2 s24 fs" />
        </div>
    </div>

    <div className="extras-block rel flex">

        <div className="chat rel">
            <div className="section section-b rel">                    
                <h2 className="title s24 fontb">Quick <span  className="fontn">Chat</span></h2>
                <div className="messages aic flex">
                    <div className="bubble rel">
                        <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>                                    
                    </div>
                    <div className="bubble rel">
                        <h2 className="txt ibl fontn s15 c333">Love this course...</h2>                                    
                    </div>
                    <div className="bubble bubble-mine rel">
                        <h2 className="txt ibl fontn s15 c333">Hey</h2>                                    
                    </div>
                    <div className="bubble bubble-mine rel">
                        <h2 className="txt ibl fontn s15 c333">Dope Intro, thanks!@</h2>                                    
                    </div>
                </div>
            </div>
        </div>
        <div className="now-watching rel">
            <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
            <div className="section section-b rel">                    
                <h2 className="title s24 fontb">Now <span  className="fontn">Watching</span></h2>
                <div className="you-list rel">
                    <div className="you rel aic flex">
                        <div className="pic">
                            <img src="http://placeimg.com/100/100/people?guest-1" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">Grey Montgommery</h2>
                            <h2 className="s13 uname fontn c777">@gregdomm</h2>
                        </div>
                    </div>
                    <div className="you rel aic flex">
                        <div className="pic">
                            <img src="http://placeimg.com/100/100/people?guest-2" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                            <h2 className="s13 uname fontn c777">@leilaearns</h2>
                        </div>
                    </div>
                    <div className="you rel aic flex">
                        <div className="pic">
                            <img src="http://placeimg.com/100/100/people?guest-3" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                            <h2 className="s13 uname fontn c777">@leilaearns</h2>
                        </div>
                    </div>
                    <div className="you rel aic flex">
                        <div className="pic">
                            <img src="http://placeimg.com/100/100/people?guest-4" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                            <h2 className="s13 uname fontn c777">@leilaearns</h2>
                        </div>
                    </div>
                </div>
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