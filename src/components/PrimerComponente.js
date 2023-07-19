
import React,{useState} from 'react'

export const PrimerComponente = () => {

    const[nombre,setnombre]=useState ("Susana")
   // let nombre = "Susana"
    let web = "www.PikaPika"

    const cambiarNombre=(nuevoNombre) =>{
        setnombre(nuevoNombre)  ;          
     }

       

    let cursos = [
        "Master en JS",
        "Master en Angular",
        "Master en React",
        "Master en CSS",
    ]

  return (
    <div>
        <h1>PrimerComponente</h1>
        <p>Este texto es del componente 1</p>
        <p>Mi nombre es:<strong className={nombre.length >= 4 ? 'verde' : 'rojo' }>{nombre}</strong></p>
        <p>Mi web es : {web}</p>

        
        <input type="text" onChange={e=>cambiarNombre(e.target.value)}placeholder="cambia el nombre"/>

        <button onClick={e => {
            console.log("El valor guardado de tu estado es:",nombre);
        }}>Mostrar valor de estado</button>

        <button onClick={e => cambiarNombre("Susana Alba")}>
        Cambiar nombre</button>


        <h2>Cursos:</h2>
        <ul>
            {
                cursos.map((curso,indice) =>{
                    return (<li key={indice}>
                        {curso}
                        </li>);
                })
            }
        </ul>




    </div>
    
  )
}
