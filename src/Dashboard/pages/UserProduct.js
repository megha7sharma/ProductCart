import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { delUser, getUsersAction } from '../../actions/actions'


export default function UserProduct() {

    const list = useSelector(state => state.userList.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAction());
    }, [])

    const history = useHistory();
    return (
        <div>
            <label>Search Text Here:  </label>
            <input type="text" />

            <p>Users List :- </p>
            <table>
               {list && list.map((item) => {
                   return (
                    <tr>
                    <td>{item.id}.</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td><button onClick={(e) => history.push({pathname: "/dashboard/user-add", state: {userEdit: item}})}>Edit</button></td>
                    <td><button onClick={() => dispatch(delUser(item))}>Delete</button></td>
                </tr>
                   )
               })

               }
            </table>
                <button onClick={() => history.push("/dashboard/user-add")}>Add User</button>           
        </div>
    )
}
