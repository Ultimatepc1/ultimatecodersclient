import React,{Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email: '',
            password: '',
            phoneno:'',
            userrole:'',
            created_at:''
        }
    }

    componentDidMount(){
        const token=localStorage.usertoken
        if(token==null){
            this.props.history.push('/login')
        }else{
            const decoded =jwt_decode(token)
            this.setState({
                name:decoded.name,
                phoneno:decoded.phoneno,
                email:decoded.email,
                userrole:decoded.userrole,
                created_at:decoded.created_at,
                dp:decoded.dp
            })
            console.log(decoded);
        }
    }
    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mt-5">
                        <h1 className="text-center"><img className="rounded-circle " src={this.state.dp} alt="avatar_img" /> Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{this.state.phoneno}</td>
                            </tr>
                            <tr>
                                <td>User Status</td>
                                <td>{this.state.userrole}</td>
                            </tr>
                            <tr>
                                <td>Account Created At</td>
                                <td>{this.state.created_at}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Profile