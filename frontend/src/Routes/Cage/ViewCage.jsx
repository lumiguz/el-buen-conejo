import styles from "../Cage/ViewCage.module.css";
import CardCreate from "../../Components/CardCreateCage/CardCreate";

const ViewCage = () => {
  return (
    <>
      <section className={styles.flexContainer}>
        <div className={styles.flexContainerDiv1}>
          <h1>Comenzar en El buen {<br></br>} conejo es muy fácil</h1>
        </div>

        <div className={styles.flexContainerDiv2}>
          <CardCreate />
        </div>
      </section>
    </>
  );
};

export default ViewCage;
