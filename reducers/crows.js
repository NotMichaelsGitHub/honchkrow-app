const initialState = {  
  count: 1
};

export default function Crows(state = initialState, action) {

  switch(action.type){
    case 'USER_CLICKED':
      return {
        ...state,
        count: state.count + 1,
      }
      
      default:
        return state

    }
  
}