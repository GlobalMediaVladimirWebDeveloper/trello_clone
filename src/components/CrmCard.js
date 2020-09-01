import React from "react";
import "../css/crmList/crmcard.scss";
import { Draggable } from "react-beautiful-dnd";

const CrmCard = ({id,title,description, index}) => {

    return(
        <Draggable draggableId={String(id)} index={index}>
            { provided => (
                <div className="crmCardRoot" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <h4 className="crmCardTitle">{title}</h4>
                </div>
            ) }

        </Draggable>
    );

}




export default CrmCard;