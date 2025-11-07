import { useContext, useState } from 'react'
import { UserContext } from './UserContext'
import Person from './Person'
import { UserProvider } from './UserContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let name: String ='Pedro'
    let age:number = 34;
    let isMarried:boolean =true;

    let ages: number[]=[1,2,3,3,4,5,6,6];
    let person: any =3;
    person ="hhh";
    const {users,updateUser,deleteUser} = useContext(UserContext)

  return (
    <>
        <Person name={name as string} age={age}></Person>
    </>
  )
}

export default App
