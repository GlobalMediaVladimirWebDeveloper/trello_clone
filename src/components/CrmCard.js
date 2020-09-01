import React from "react";
import "../css/crmList/crmcard.scss";


const CrmCard = ({id,title,description}) => {

    return(
        <div className="crmCardRoot" >
            <h4 className="crmCardTitle">{title}</h4>
        </div>
    );

}




export default CrmCard;