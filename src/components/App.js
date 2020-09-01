import React, { Component } from 'react';
import CrmList from "./CrmList";
import { connect } from "react-redux";
import "../css/normolize.css";
import "../css/crmList/crmboard.scss";
import CrmActionButton from "./CrmActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

	onDragEnd = () => {

		// TODO: reoreding logic

	};

	render(){

		const { lists } = this.props;

		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<section className="App">
					<h1>Test</h1>
					<section className="crmBoard">
						{ lists.map(list => 
							<CrmList key={list.id} id={list.id} title={list.title} cards={list.cards}/>
						)}
						<CrmActionButton isCard={false} idOfActionForm="CrmAddNewList" inputPlaceholder="Enter list title..." actionButtonTitle="Add List" buttonTitle="Add another list" />
					</section>

					
				</section>
			</DragDropContext>
		);
	}

}


const mapStateToProps = state => ({

	lists: state.lists

});


export default connect(mapStateToProps)(App);
