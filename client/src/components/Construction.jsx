import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";
import './SelectProject.scss';
import ComingSoonLogo from "../../src/images/giphy.gif"
import { useNavigate } from "react-router";


const Construction = () => {

  let navigate = useNavigate()

  return (
    <div className="select-images-box">
     <div className="opaque-background">
      <div className="top-logo">
        <div className="logo-circle"></div>
        <h4 className="logo-text">trackIT</h4>
      </div>
      <div className="select--page">
      <div classNames="center--items">
        <div className="button__header">
          <h2 className="page-controls">Work In Progress</h2>
        </div>
        <div className="action--buttons">
          
        </div>
        <div>
          <img src={ComingSoonLogo} alt="comming-soon" />
        </div>
        
      </div>
  
          <PrimaryButton style={{ backgroundColor: "#4D45B5", marginRight: "20px", marginTop: "2rem", padding: "1rem 5.2rem", borderRadius: "0.4rem"}} onPress={navigate("/signup")}>
          Back to Login Page
          </PrimaryButton>

     
    </div>
     </div>
    </div> 
   
   );
}
 
export default Construction;