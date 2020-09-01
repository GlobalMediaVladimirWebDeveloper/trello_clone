import { CONSTANTS } from "../actions";

const initialState = [

    {
        id: `list-${0}`,
        title: "Last episode.",
        cards: [
            {
                id: `list-${0}__card-${0}`,
                title: "We created a static list and static card.",
                description: "This an description"

            },
            {
                id: `list-${0}__card-${1}`,
                title: "We add some material ui shit.",
                description: "This an second description"
    
            }
        ]
    },
    {
        id: `list-${1}`,
        title: "Next episode.",
        cards: [
            {
                id: `list-${1}__card-${0}`,
                title: "Do some shit to.",
                description: "This an description"

            },
            {
                id: `list-${1}__card-${1}`,
                title: "Generic shit.",
                description: "This an second description"
    
            }
        ]
    }

]

let listId = 2;
let cardId = 3;

const listsReducer = (state = initialState, action) => {

    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: `list-${listId}`,
                title: action.payload,
                cards: [],
            }
            listId++;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: `list-${listId}__card-${cardId}`,
                title: action.payload.title,
            }
            cardId++;
            
            const newState = state.map(list => {
                if(list.id === action.payload.listId){
                    return{
                        ...list,
                        cards:[...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        default:
            return state;
    }

};







export default listsReducer;