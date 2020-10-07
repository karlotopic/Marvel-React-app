import { RECEIVE_API_DATA, BOOKMARK, UPDATE_DATA } from "../actions";


function data(state = [], action) {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return action.payload;
    case BOOKMARK:
      let newState = {};
      if (action.payload.bookmark === 0) {
        newState = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              bookmark: 1,
            };
          } else {
            return item;
          }
        });
      } else if (action.payload.bookmark === 1) {

        newState = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              bookmark: 0,
            };
          } else {
            return item;
          }
        });
      } else {
        console.log("error");
      }
      return newState;
    case UPDATE_DATA:
      let temp=[];
      let i;
      let j;
      let counter;
      for(i=0;i<state.length;i++){
        counter=0;
        for(j=0;j<action.payload.length;j++){
          if(state[i].id===action.payload[j].id){
            counter=1;
            temp.push(action.payload[j]);
          }        
        }
        if(counter===0){
          temp.push(state[i])
        }
        
      }
      return temp;
    default:
      return state;
  }
}

export default data;
