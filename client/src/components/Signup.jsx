import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import Collapse from '@mui/material/Collapse';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

import './Signup.scss';


const Signup = (props) => {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false)
  const [displayLoginForm, setDisplayLoginForm] = useState(false)

  const { createUser, loginUser, users,  reload } = props

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  }

  let navigate = useNavigate()

  const registerUser = () => {
    createUser(user)
    .then(response => {
      if (response.user) {
        const userName = response.user.first_name
        const userId = response.user.id
        window.sessionStorage.setItem("userName", userName);
        window.sessionStorage.setItem("userId", userId);
        navigate("/navigation")
        reload()
      } else {
        return
      }
    })
    handleFormDisplay()
  }



  const userLogin = () => {
    loginUser(user)
    .then(response => {
      if (response.feedback === "OK") {
        users.forEach(dbUser => {
          if(dbUser.email === response.user.email) {
            const userId = dbUser.id
            const userName = dbUser.first_name
            window.sessionStorage.setItem("userName", userName);
            window.sessionStorage.setItem("userId", userId);
            navigate("/navigation");
            reload()
          } else {
            return
          }
        })
      }
      
    })
    handleFormDisplay()
  }


  const registerForm = (
    <Form>
        <FormGroup>
          <Input className="form-inputs" type="text" name="first_name" id="first_name" placeholder="First Name" bsSize="lg" value={user.first_name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs" type="text" name="last_name" id="last_name" placeholder="Last Name" bsSize="lg" value={user.last_name} onChange={handleChange}  />
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs" type="email" name="email" id="email" placeholder="Email" bsSize="lg" value={user.email} onChange={handleChange}  />
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs"  type="password" name="password" id="password" rows="5" placeholder="Password" bsSize="lg" value={user.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup className="button-container">
    
            <Button className="login_btn" onClick={registerUser}>Register</Button>

        </FormGroup>
      </Form>
  )
  const LoginForm = (
    <Form>
        <FormGroup>
          <Input className="form-inputs" type="email" name="email" id="email" placeholder="Enter your email" bsSize="lg" value={user.email} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs"  type="password" name="password" id="password" rows="5" placeholder="Password" bsSize="lg" value={user.password} onChange={handleChange}/>
        </FormGroup>
        <FormGroup className="button-container">
            <Button className="login_btn" onClick={userLogin}>Login</Button>
        </FormGroup>
      </Form>
  )

  const handleFormDisplay = () => setDisplayRegisterForm(prev => !prev)
  const handleLoginDisplay = () => setDisplayLoginForm(prev => !prev)

  return (
    <div className="image-box">
    <div className="opaque-background">
    
      <div className="top-logo-signup">
        <div className="logos">
          <div className="logo-circle"></div>
          <h4 className="logo-text">trackIT</h4>
        </div>
        <Link to="/dashboard">
          <HomeIcon className="home__icon"/>
        </Link>
        
      </div>
  
 
     
    
    
     <div className="select--page">
     <div classNames="center--items">
       <div className="button__header">
         <h2 className="page-control">Create your trackIT account</h2>
       </div>
       <div className="action__buttons">
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginBottom: "15px", padding: "1rem 7rem", borderRadius: "0.4rem"}}>
          <div className="signup-label">
            <GitHubIcon className="git-icon" />
            <h6>Continue with Github</h6>
          </div>
        </PrimaryButton >
        <Link to="/login">
          <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 9rem", borderRadius: "0.4rem"}}>
            <div className="signup-label">
              <GoogleIcon className="git-icon" />
              <h6>Continue with Google</h6>
            </div>
          </PrimaryButton >
        </Link>
     

        <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 7rem", borderRadius: "0.4rem"}}>
          <div className="signup-label" onClick={handleFormDisplay}>
            <h6>Register with your email</h6>
          </div>
        </PrimaryButton >
       </div>

        <Collapse in={displayRegisterForm}>{registerForm}</Collapse>

       <div className="login__header">
         <h5>Already a user? Login below!</h5>
       </div>
       <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 10rem", borderRadius: "0.4rem"}}>
          <div className="signup-label" onClick={handleLoginDisplay}>
            <h6>Login to your account</h6>
          </div>
        </PrimaryButton >
        <Collapse in={displayLoginForm}>{LoginForm}</Collapse>
        
     </div>
    
   </div>
    </div>
   </div> 
   
   );
}


export default Signup;