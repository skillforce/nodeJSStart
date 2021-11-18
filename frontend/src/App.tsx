import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './App.css';
import axios from 'axios';


const App = () => {


    let userRef = useRef<HTMLInputElement>(null);


    const [users, setUsers] = useState<{}[]>([{}])
    const [edit, setEdit] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const getUsers = () => {

        axios.get('http://localhost:7542/users' + window.location.search).then(res =>setUsers(res.data))
        }


    useEffect(() => {
        getUsers()
    }, [])

    const onClickAddUserHandler = () => {
        axios.post('http://localhost:7542/users', {name: userRef.current?.value}).then(res => getUsers())
    }

    const onClickDeleteUserHandler = (id: string) => {
        axios.delete(`http://localhost:7542/users/${id}`,).then(res => getUsers())
    }
    const onChaneInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onClickSaveBtn = (id: string, name: string) => {
        axios.put('http://localhost:7542/users', {id, name})
            .then(res => getUsers())
            .then(res => onChangeEditMade(false))
    }
    const onChangeEditMade = (newStatus: boolean) => {
        setEdit(newStatus)
    }

    return (
        <div>
            <input type={'text'} ref={userRef}/>
            {users.map((t: any) => (<div key={t._id}>
                {!edit ? <div key={t._id+'a'}><span onDoubleClick={() => onChangeEditMade(true)}>Name:{t.name}
                        <button onClick={() => onClickDeleteUserHandler(t._id)}>X</button></span></div> :
                    <div key={t._id +'b'}><input  defaultValue={t.name} onChange={onChaneInputHandler}/>
                        <button onClick={() => onClickSaveBtn(t._id, inputValue)}>SAVE</button>
                    </div>}</div>))}
            <button onClick={onClickAddUserHandler}>Add user</button>
        </div>
    );

}

export default App

