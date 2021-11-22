import PrimaryButton from "./PrimaryButton";
import './Signup.scss';

const Signup = () => {
  return (
    <div className="page-container">
     <div className="select--page">
      <div classNames="center--items">
        <div className="butter__header">
          <h2>Select your project type</h2>
        </div>
        
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginRight: "20px", padding: "1rem 4rem", borderRadius: "0.4rem"}}>
          Construction
        </PrimaryButton >
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginRight: "20px", padding: "1rem 4rem", borderRadius: "0.4rem"}}>
        Software
        </PrimaryButton>
      </div>
     
    </div>
    </div> 
   
   );
}
 
export default Signup;