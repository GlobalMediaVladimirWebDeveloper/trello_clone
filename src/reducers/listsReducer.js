

const initialState = [

    {
        id: 0,
        title: "Last episode.",
        cards: [
            {
                id: 0,
                title: "We created a static list and static card.",
                description: "This an description"

            },
            {
                id: 1,
                title: "We add some material ui shit.",
                description: "This an second description"
    
            }
        ]
    },
    {
        id: 1,
        title: "Next episode.",
        cards: [
            {
                id: 0,
                title: "Do some shit to.",
                description: "This an description"

            },
            {
                id: 1,
                title: "Generic shit.",
                description: "This an second description"
    
            }
        ]
    }

]


const listsReducer = (state = initialState, action) => {

    switch(action.type) {
        default:
            return state;
    }

};







export default listsReducer;