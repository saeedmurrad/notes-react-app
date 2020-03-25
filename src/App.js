import React, {useState, Fragment} from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import MyComponent from "./forms/MyComponent";
import FetchApi from "./fetch/FetchApi"

const App = () => {
    // Data
    var usersData = [];
    const initialFormState = {id: null, title: '', content: ''};

    // Setting state
    const [users, setUsers] = useState(usersData);

    FetchApi.getRequest('/api/notes')
        .then((response) => response.json())
        .then(data => {
            setUsers(data)
        }, error => {
            console.log(usersData);
        });


    // CRUD operations
    const addUser = user => {
        let promise = FetchApi.postRequest('/api/notes', user);
        promise.then(response => response.json())
            .then(response => {
                setUsers([...users, response])
            })
            .catch(error => {
                console.log(error)
            });
    };

    const deleteUser = id => {
        let promise = FetchApi.deleteRequest('/api/notes/', id);
        promise.then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className="container">
            <h1>Notes App by Saeed Murrad</h1>
            <MyComponent/>
            <div className="flex-row">
                <div className="flex-large">
                    <Fragment>
                        <h2>Add Note</h2>
                        <AddUserForm addUser={addUser}/>
                    </Fragment>
                </div>
                <div className="flex-large">
                    <h2>View Notes</h2>
                    <UserTable users={users} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    )
}

export default App
