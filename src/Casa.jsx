import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { Header } from './components/Header'



const Casa = () => {


    const navigate = useNavigate()
    const [ elementos, setElementos] = useState([])

    useEffect(() => {
        let inicio = JSON.parse( localStorage.getItem('elementos') )
        if (!inicio){          
            setElementos( [0] )
            console.log("a1ui" , elementos)
        } else {
            setElementos( inicio )
        }
        console.log(elementos)
    }, [])
    

    /*
    console.log(inicio)
    if (!inicio ) {
        setElementos(inicio)
    } else {
        localStorage.setItem('elementos', JSON.stringify(elementos))
    }
    */

    const addTemplate = () => {
        setElementos( [...elementos, elementos.length+1 ])
        localStorage.removeItem('elementos')
        localStorage.setItem('elementos', JSON.stringify(elementos))
        console.log(elementos)
    }

    return (
    <div className='Templates'>
        <Header>
            <button onClick={addTemplate}> Crear template</button>
        </Header>

        <div className='emailTemplate'>
            
            {elementos.map( (elem) => (
                <div key={elem} className="templateEdit"> 
                    <h2> New Template</h2>
                    <NavLink to="./p"> Edit </NavLink>
                </div> 
            ))} 
        </div>
    </div>
  )
}

export default Casa