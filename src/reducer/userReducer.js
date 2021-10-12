
const intialState ={users:[]}


export function userReducer(state=intialState,action) {
    switch(action.type){
        case "ADD_USER" :{
            return {users:action.payload}
        } 

        case "EDIT_USER" : {        
            // const newUser = state.users.map((item) => {
            //     if(item.id === action.payload.id){
            //         return action.payload
            //     }else{

            //         return item;
            //     }
            // });
            return {...state,users:action.payload}; 
        }

        case "DEL_USER" : {
            // const delUser = state.users.filter((item) => item.id !== action.payload.id);
            return {...state, users: action.payload}
        }

        case "SHOW_USER" : {
            return {...state, users: action.payload}
        }


        default: return state;

    }

    
};

