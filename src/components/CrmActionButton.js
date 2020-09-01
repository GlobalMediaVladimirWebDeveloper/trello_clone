import React from "react";
import Textarea from "react-textarea-autosize";
import "../css/crmList/crmAddForm.css";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class CrmActionButton extends React.Component {

    state = {
        isFormOpen: false,
        text: ""
    }

    openForm = () => {

        this.setState({isFormOpen:true});

    };

    closeForm = e => {

        this.setState({isFormOpen:false});

    };

    handleInputChange = e => {

        this.setState({
            text: e.target.value
        })

    };

    handleAddList = () => {

        const { dispatch } = this.props;
        const { text } = this.state;

        if(text){
            dispatch(addList(text));
        }
        this.setState({text:""});
        return;

    };


    handleAddCard = () => {

        const { dispatch,listId } = this.props;
        const { text } = this.state;

        if(text){
            dispatch(addCard(listId,text));
        }
        this.setState({text:""});
        return;

    };


    
    renderAddButton = () => {

        const { isCard, buttonTitle } = this.props;
        const buttonTextColor = !isCard ? "white": "#5e6c84";
        const buttonTextBackgroud = !isCard ? "hsla(0,0%,100%,.24)": "inherit";
        const buttonWidth = !isCard ? "275px": "100%";
        const buttonPadding = !isCard ? "6px 8px": "";
        const buttonMarginTop = !isCard ? "0": "10px";

        return(
            <div className="CrmActionButtonRoot" style={{width:buttonWidth,  color: buttonTextColor, marginTop:buttonMarginTop, background: buttonTextBackgroud}}>

                <button className="CrmActionButtonAdd" onClick={this.openForm} >
                    <span style={{padding: buttonPadding,color: buttonTextColor}}>{buttonTitle}</span>
                </button>

            </div>
        );


    };
    
    renderCrmAddForm = () => {

        const { isCard, inputPlaceholder, actionButtonTitle, idOfActionForm } = this.props;
        const buttonWidth = !isCard ? "calc(275px - 16px)": "100%";

        return(

            <div className="ActionButtonFormRoot">

                <form id={idOfActionForm} className="ActionButtonForm">
                    <Textarea 
                        className="ActionFormTextArea"
                        placeholder={inputPlaceholder}
                        autoFocus 
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{width:buttonWidth}}
                    />
                    <div className="ActionFormControls">
                        <button className="ActionButtonAdd" onMouseDown={ !isCard ? this.handleAddList : this.handleAddCard}>{actionButtonTitle}</button>
                        <button className="ActionButtonAddClose" ></button>
                    </div>
                </form>

            </div>

        );
    };

    render(){

        return this.state.isFormOpen ? this.renderCrmAddForm() : this.renderAddButton();

    }
}















export default connect()(CrmActionButton);