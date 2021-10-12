import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction, editUserAction } from '../../actions/actions';
import { useHistory } from 'react-router';

export default function UserAdd() {
  
    const history = useHistory();
    let lists = {id:null,name:"", email: "", password: ""}
    if(history.location.state){
         lists = history.location.state.userEdit;
    }
    
    const [form, setForm] = useState(lists);
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(form.id){
            dispatch(editUserAction(form));

        }else{
            const id = Date.now();
            let formData = {...form,id:id}
            dispatch(addUserAction(formData));

        }

    };

    const handleChange = (e) => {
        const name = e.target.name;
        
        setForm({...form,[name] : e.target.value});
    };

    return (
        <div>
            <form onSubmit={(e) => handleFormSubmit(e)}>             
                         
                <label>Name :-</label>
                <input type="text" name="name" onChange={(e) => handleChange(e)} value={form.name} />

                <label>Email :-</label>
                <input type="text" name="email" onChange={(e) => handleChange(e)} value={form.email} />

                <label>Password :-</label>
                <input type="text" name="password" onChange={(e) => handleChange(e)} value={form.password} />        
            <button type="submit">Submit</button>

            </form> 
        </div>
    )
}
