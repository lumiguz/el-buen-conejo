import React from "react";
import styles from "../CardRabbit/CardRabbit.module.css"
const CardRabbit = () =>{
    return <> 
                <div className="card-horizontal" id={styles.cardhorizontal}>
      <img className="image" src="https://www.acws.cl/wp-content/uploads/2021/04/nota_conejo_abril.jpeg" id={styles.imagerabbit} />
      <div className="card-container" id={styles.cardcontainerrabbit}>
        <div className="card-title" id={styles.cardtittlerabbit}>
          <div className="sub" id={styles.subrabbit}><div className="text-wrapper" id={styles.textwrapper}>Id: 00023</div></div>
          <div className="nombre-del-conejo" id={styles.namerabbit}>{"{"}Nombre del conejo{"}"}</div>
        </div>
        <div className="card-info" id={styles.cardinforabbit}>
          <div className="div" id={styles.divmacho}>Macho</div>
          <div className="text-wrapper-2" >8 kg</div>
        </div>
      </div>
    </div>
    </>
} 

export default CardRabbit