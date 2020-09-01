import React from "react";
import CrmCard from "./CrmCard";
import "../css/crmList/crmlist.css";
import CrmActionButton from "./CrmActionButton";

const CrmList = ({id, title, cards}) => {

    return(
        <div className="crmListRoot">
            <h3 className="crmlistTitle">{title}</h3>
            <div className="crmListCards">
                { cards.map( card => <CrmCard key={card.id} id={card.id} title={card.title} description={card.description} />) }
            </div>

            <CrmActionButton isCard={true} idOfActionForm="CrmAddNewCard" inputPlaceholder="Enter a title for this card..." actionButtonTitle="Add Card" buttonTitle="Add another card" />
        </div>
    );
                                    
}





export default CrmList;




