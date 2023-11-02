import styles from "../CageEdit/ViewCageEdit.module.css";
import FormEdit from "../../../../Components/CageFormEdit/FormEdit";

const ViewCageEdit = () => {
  return (
    <>
      <section className={styles.flexContainer}>
        <div className={styles.flexContainerDiv}>
          <FormEdit />
        </div>
      </section>
    </>
  );
};

export default ViewCageEdit;