import { combineReducers } from 'redux'
import ObjectAssign from 'object-assign'
import { routerStateReducer } from 'redux-router';

function speakers( state = [], action ) {

	switch ( action.type ) {
		case 'UPDATE_SPEAKERS':
			return action.speakers
			break
	}

	return state
}

function menu( state = {}, action ) {

	return {
		items: [
			{
				name: "Home",
				url: "/"
			},
			{
				name: "About",
				url: "/about/"
			},
			{
				name: "Speakers",
				url: "/speakers/"
			},
			{
				name: "News",
				url: "/news/"
			},
			{
				name: "Sponsors",
				url: "/sponsors/"
			},
			{
				name: "Hack Day",
				url: "/hack/"
			},
			{
				name: "Contact",
				url: "/contact/"
			}
		]
	}
}

var reducers = combineReducers({
	speakers,
	menu,
	router: routerStateReducer
})

module.exports = reducers
