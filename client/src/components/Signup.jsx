import PrimaryButton from "./PrimaryButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import './Signup.scss';

const Signup = () => {
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
          <div className="signup-label">
            <h6>Continue with your email</h6>
          </div>
        </PrimaryButton >
        <PrimaryButton style={{ backgroundColor: "#262525", marginBottom: "20px", padding: "1rem 7rem", borderRadius: "0.4rem"}}>
          <div className="signup-label">
            <h6>Continue with your email</h6>
          </div>
        </PrimaryButton >
       </div>
      
     </div>
    
   </div>
    </div>
   </div> 
   
   );
}
 
export default Signup;