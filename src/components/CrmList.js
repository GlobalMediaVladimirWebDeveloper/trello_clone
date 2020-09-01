import React from "react";
import CrmCard from "./CrmCard";
import "../css/crmList/crmlist.css";
import CrmActionButton from "./CrmActionButton";
import { Droppable } from "react-beautiful-dnd";

const CrmList = ({id, title, cards}) => {

    return(
        <Droppable droppableId={String(id)}>
            { provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="crmListRoot">
                    <h3 className="crmlistTitle">{title}</h3>
                    <div className="crmListCards">
                        { cards.map( (card, index) => <CrmCard index={index} listId={id} id={card.id} key={card.id} title={card.title} description={card.description} />) }
                    </div>

                    <CrmActionButton isCard={true} listId={id} idOfActionForm="CrmAddNewCard" inputPlaceholder="Enter a title for this card..." actionButtonTitle="Add Card" buttonTitle="Add another card" />
                    {provided.placeholder}
                </div>
            )}

        </Droppable>
    );
                                    
}





export default CrmList;




