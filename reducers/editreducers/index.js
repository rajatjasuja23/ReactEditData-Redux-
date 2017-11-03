import {combineReducers}  from 'redux';


function editsave(state ={
    isData:'rajat',
    isVisible:true,
}, action) {
   switch (action.type) {
	
    case 'EDIT_DATA':
         return {
            ...state,
            isVisible:!action.payload
            }
        break;

    case 'CHANGE_DATA' :

         return {
             ...state,
             isData:action.payload,
         } 
         break;

    case 'SAVE_DATA' :
         return {
            ...state,
                 isData:action.payload,
                isVisible:!action.isVisible
            }
         break;
      default: 
      return state
   }
}

const Editreducer = combineReducers({
    editsave
})

export default Editreducer;