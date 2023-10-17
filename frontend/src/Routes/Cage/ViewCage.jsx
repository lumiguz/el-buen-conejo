import "../Cage/ViewCage.css";
import CardCreate from "../../Components/CardCreateCage/CardCreate";

const ViewCage = () => {
  return (
    <>
      <section className="flex-container">
        <div className="flex-container-div1">
          <h1>Comenzar en El buen {<br></br>} conejo es muy fácil</h1>
        </div>

        <div className="flex-container-div2">
          <CardCreate />
        </div>
      </section>
    </>
  );
};

export default ViewCage;
