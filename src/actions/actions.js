

const addUserAction = (data) => {    
    const users = JSON.parse(localStorage.getItem('users')||'[]');
    users.push(data)
    localStorage.setItem("users", JSON.stringify(users));
    return {type: "ADD_USER",payload:users}
    
}

const editUserAction = (data) => {
    const users = JSON.parse(localStorage.getItem('users'));
    let newUsers = users.map((item) => {    
        if(item.id === data.id) {
            return data;
        } 
        return item;
    });
    localStorage.setItem("users", JSON.stringify(newUsers));
    return {type: "EDIT_USER", payload: newUsers}
}

const delUser = (data) => {
    const users = JSON.parse(localStorage.getItem('users'));
    let delUsers = users.filter((item) => item.id !== data.id);

    localStorage.setItem("users", JSON.stringify(delUsers));
    return {type: "DEL_USER", payload: delUsers}
}

const getUsersAction = () => {
    const users = JSON.parse(localStorage.getItem('users')||'[]');
    return {type: "SHOW_USER", payload: users}
}
export {addUserAction, editUserAction, delUser, getUsersAction} ;