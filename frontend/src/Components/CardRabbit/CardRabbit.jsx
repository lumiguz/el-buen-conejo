import React from "react";
import styles from "../CardRabbit/cardRabbit.module.css"

const CardRabbit = () =>{
    return <> 
        <div>
        <div className="card-horizontal" id={styles.cardRabbiHorizontal}>
      <img className="image" src="https://t2.ea.ltmcdn.com/es/posts/6/8/0/razas_de_conejos_enanos_o_toy_24086_600_square.jpg" id={styles.imageCard}/>
      <div className="card-container" id={styles.rabbitCardContainer}>
        <div className="card-title" id={styles.rabbitCardTitle}>
          <div className="sub"><div className="text-wrapper">Id: 00023</div></div>
          <div className="nombre-del-conejo">{"{"}Nombre del conejo{"}"}</div>
        </div>
        <div className="card-info">
          <div className="div">Macho</div>
          <div className="text-wrapper-2">8 kg</div>
        </div>
      </div>
    </div>
        </div>
    </>
} 

export default CardRabbit