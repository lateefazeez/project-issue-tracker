import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import Collapse from '@mui/material/Collapse';
import './Signup.scss';

const Signup = () => {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false)
  const [displayLoginForm, setDisplayLoginForm] = useState(false)

  const registerUser = () => console.log("New User Registered")

  const registerForm = (
    <Form>
        <FormGroup>
          <Input className="form-inputs" type="email" name="email" id="email" placeholder="Enter your email" bsSize="lg" />
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs"  type="password" name="password" id="password" rows="5" placeholder="Password" bsSize="lg"/>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="register_btn" onClick={registerUser}>Register</Button>
        </FormGroup>
      </Form>
  )
  const LoginForm = (
    <Form>
        <FormGroup>
          <Input className="form-inputs" type="email" name="email" id="email" placeholder="Enter your email" bsSize="lg" />
        </FormGroup>
        <FormGroup>
          <Input className="form-inputs"  type="password" name="password" id="password" rows="5" placeholder="Password" bsSize="lg"/>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="register_btn" onClick={registerUser}>Register</Button>
        </FormGroup>
      </Form>
  )

  const handleFormDisplay = () => setDisplayRegisterForm(prev => !prev)
  const handleLoginDisplay = () => setDisplayLoginForm(prev => !prev)

  return (
    <div className="page-container">
    <div className="opaque-background">
     <div className="top-logo">
       <div className="logo-circle"></div>
       <h4 className="logo-text">trackIT</h4>
     </div>
     <div className="select--page">
     <div classNames="center--items">
       <div className="button__header">
         <h2>Create your trackIT account</h2>
       </div>
       <div className="action__buttons">
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginBottom: "15px", padding: "1rem 7rem", borderRadius: "0.4rem"}}>
          <div className="signup-label">
            <GitHubIcon className="git-icon" />
            <h6>Continue with Github</h6>
          </div>
        </PrimaryButton >
        <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 7rem", borderRadius: "0.4rem"}}>
          <div className="signup-label">
            <GoogleIcon className="git-icon" />
            <h6>Continue with Google</h6>
          </div>
        </PrimaryButton >

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
       <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 9rem", borderRadius: "0.4rem"}}>
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