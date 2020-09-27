import React,{Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email: '',
            password: '',
            phoneno:'',
            loading:false,
            error:false,
            nullfield: false,
            passlength: false
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        if(this.state.name=='' || this.state.email=='' || this.state.password==''){
            if(this.state.password.length>0 && this.state.password.length<8){
                this.setState({name:this.state.name,
                    email:this.state.email,
                    password: this.state.password,
                    phoneno:this.state.phoneno,
                    loading: false,
                    error:false,
                    nullfield: true,
                    passlength: true});
            }else{
                this.setState({name:this.state.name,
                    email:this.state.email,
                    password: this.state.password,
                    phoneno:this.state.phoneno,
                    loading: false,
                    error:false,
                    nullfield: true,
                    passlength: false});
            }
            setTimeout(() => {
                this.setState({name:this.state.name,
                    email:this.state.email,
                    password: this.state.password,
                    phoneno:this.state.phoneno,
                    loading: false,
                    error:false,
                    nullfield: false,
                    passlength: false});
                  }, 5000); 
                  return;
        }
        if(this.state.password.length>0 && this.state.password.length<8){
            this.setState({name:this.state.name,
                email:this.state.email,
                password: this.state.password,
                phoneno:this.state.phoneno,
                loading: false,
                error:false,
                nullfield: false,
                passlength: true});
            setTimeout(() => {
                this.setState({name:this.state.name,
                    email:this.state.email,
                    password: this.state.password,
                    phoneno:this.state.phoneno,
                    loading: false,
                    error:false,
                    nullfield: false,
                    passlength: false});
                    }, 5000); 
                    return; 
        }
        if(this.state.phoneno.length>0){
            if(this.state.phoneno.length!=10){
                return
            }
        }
        const newUser ={
            name:this.state.name,
            email:this.state.email,
            phoneno:this.state.phoneno,
            password: this.state.password,
            loading: false,
            error:false,
            nullfield: false,
            passlength: false
        }

        register(newUser).then(res=>{
            if(res.error==null){
                this.setState({name:this.state.name,
                            email:this.state.email,
                            password: this.state.password,
                            phoneno:this.state.phoneno,
                            loading: true,
                            error:false,
                            nullfield: false,
                            passlength: false});
                setTimeout(() => {
                    this.setState({name:this.state.name,
                            email:this.state.email,
                            password: this.state.password,
                            phoneno:this.state.phoneno,
                            loading: false,
                            error:false,
                            nullfield: false,
                            passlength: false});
                    this.props.history.push('/login')
                  }, 4000);
            }else{
                this.setState({name:this.state.name,
                               email:this.state.email,
                               password: this.state.password,
                               phoneno:this.state.phoneno,
                               loading: false,
                               error:true,
                               nullfield: false,
                               passlength: false});
                setTimeout(() => {
                    this.setState({name:this.state.name,
                        email:this.state.email,
                        password: this.state.password,
                        phoneno:this.state.phoneno,
                        loading: false,
                        error:false,
                        nullfield: false,
                        passlength: false});
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
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name<span style={{color:"red"}}>*</span></label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.onChange}></input>
                                {this.state.nullfield && this.state.name=='' && <span className="alert alert-danger" role="alert">This is a required Field</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneno">Phone Number</label>
                                <input type="number" className="form-control" name="phoneno" placeholder="Enter 10 Digit Phone Number" value={this.state.phoneno} onChange={this.onChange}></input>
                                {this.state.phoneno.length>0 && this.state.phoneno.length<10 && <span className="alert alert-warning" role="alert">Phone Number should be 10 digit</span>}
                                {this.state.phoneno.length>10 && <span className="alert alert-danger" role="alert">Invalid Phone Number</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address<span style={{color:"red"}}>*</span></label>
                                <input type="email" className="form-control" name="email" placeholder="abc@xyz.com" value={this.state.email} onChange={this.onChange}></input>
                                {this.state.nullfield && this.state.email=='' && <span className="alert alert-danger" role="alert">This is a required Field</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password<span style={{color:"red"}}>*</span></label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange}></input>
                                {this.state.nullfield && this.state.password=='' && <span className="alert alert-danger" role="alert">This is a required Field</span>}
                                {this.state.passlength &&  <span className="alert alert-danger" role="alert">Minimum Length of Password must be 8</span>}
                            </div>
                            {this.state.error &&  <div className="alert alert-warning" role="alert">Account already exists</div>}
                            <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={this.state.loading}>
                            {this.state.loading && (
                                <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/>)}
                            {this.state.loading && <span>Updating Data on Server</span>}
                            {!this.state.loading && <span>Register</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register