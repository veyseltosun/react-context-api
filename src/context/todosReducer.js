
export const initialState = [
    {text :"Plane the family trip", id:1},
    {text: " Go shopping for dinne" , id:2 },     
    {text :"Go for a walk", id:3},
 ];

const todosReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            return [
                ...state,
                {text: action.text, id: Math.random()}
            ];
        case "REMOVE_TODO" :
            return state.filter( todo => todo.id !== Number(action.id))  ;
        default:
            return state;  
    }

}
export default todosReducer;