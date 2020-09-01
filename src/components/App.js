import React, { Component } from 'react';
import CrmList from "./CrmList";
import { connect } from "react-redux";
import "../css/normolize.css";
import "../css/crmList/crmboard.scss";
import CrmActionButton from "./CrmActionButton";


class App extends Component {
	render(){

		const { lists } = this.props;

		return (
			<div className="App">
				<h1>Test</h1>
				<section className="crmBoard">
					{ lists.map(list => 
						<CrmList key={list.id} id={list.id} title={list.title} cards={list.cards}/>
					)}
					<CrmActionButton isCard={false} idOfActionForm="CrmAddNewList" inputPlaceholder="Enter list title..." actionButtonTitle="Add List" buttonTitle="Add another list" />
				</section>

				
			</div>
		);
	}

}


const mapStateToProps = state => ({

	lists: state.lists

});


export default connect(mapStateToProps)(App);
