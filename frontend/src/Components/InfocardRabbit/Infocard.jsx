import React from "react"
import styles from "../InfocardRabbit/infocard.module.css"

const Infocard = () =>{
    return <> 
        <div>
<div className="card rounded-4 shadow p-1" id={styles.cardinfoRabbits}>
  <div className="card-body p-2" id={styles.nameRabbits}>
        <strong>
        [Name]
        </strong>           
    <h6 id={styles.parentsRabbits}>
        Padre
    </h6>
  </div>
</div>
        </div>
    </>
}

export default Infocard