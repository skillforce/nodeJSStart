import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import axios from 'axios';


const App = () => {


    let userRef = useRef<HTMLInputElement>(null);


    const [users, setUsers] = useState<any>([])

    const getUsers = () => {
        axios.get('http://localhost:7542/users').then(res => setUsers(res.data))
    }


    useEffect(() => {
        getUsers()
    }, [])

    const onClickAddUserHandler = () => {
        axios.post('http://localhost:7542/users',{name:userRef.current?.value}).then(res => getUsers())
    }
    const onClickDeleteUserHandler = () => {
        axios.delete('http://localhost:7542/users').then(res => getUsers())
    }

    return (
        <div>
            <input type={'text'} ref={userRef}/>
            {users.map((t: any) => (<div key={t.id}><span>Name:{t.name}</span></div>))}
            <button onClick={onClickAddUserHandler}>Add user</button>
            <button onClick={onClickDeleteUserHandler}>Delete last user</button>
        </div>
    );

}

export default App

