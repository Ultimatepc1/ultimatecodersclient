import React,{Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: '',
            loading: false,
            error:false
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        if(this.state.email=='' || this.state.password==''){
            this.setState({email:this.state.email,password: this.state.password,loading: false,error:true});
            setTimeout(() => {
                this.setState({email:this.state.email,password: this.state.password,loading: false,error:false});
            }, 5000);
            return
        }
        const user ={
            email:this.state.email,
            password: this.state.password,
            loading: false,
            error: false
        }

        login(user).then(res=>{
            if(res.error==null){
                this.setState({email:this.state.email,password: this.state.password,loading: true,error:false});
                setTimeout(() => {
                    this.setState({email:this.state.email,password: this.state.password,loading: false,error:false});
                    this.props.history.push('/profile')
                  }, 4000);
            }else{
                this.setState({email:this.state.email,password: this.state.password,loading: false,error:true});
                setTimeout(() => {
                    this.setState({email:this.state.email,password: this.state.password,loading: false,error:false});
                  }, 5000); 
            }
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" name="email" placeholder="abc@xyz.com" value={this.state.email} onChange={this.onChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange}></input>
                            </div>
                            {this.state.error &&  <div className="alert alert-danger" role="alert">Invalid Username or Password</div>}
                            <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={this.state.loading}>
                            {this.state.loading && (
                                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/>)}
                            {this.state.loading && <span>Loading Data from Server</span>}
                            {!this.state.loading && <span>Sign In</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login