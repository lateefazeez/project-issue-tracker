import PrimaryButton from "./PrimaryButton";
import './SelectProject.scss';


const SelectProject = () => {
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
          <h2>Select your project type</h2>
        </div>
        <div className="action--buttons">
          
        </div>
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginRight: "20px", padding: "1rem 4rem", borderRadius: "0.4rem"}}>

          Construction
        </PrimaryButton >
        <PrimaryButton style={{ backgroundColor: "#4D45B5", marginRight: "20px", padding: "1rem 5.2rem", borderRadius: "0.4rem"}}>
        Software
        </PrimaryButton>
      </div>
     
    </div>
     </div>
    </div> 
   
   );
}
 
export default SelectProject;