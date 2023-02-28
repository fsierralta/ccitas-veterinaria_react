import React from 'react'
import { useState,useEffect  } from 'react'
//import Paciente from './Paciente'
import Error from './Error'

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  //Declarando State 
    const [nombre,setNombre]=useState('')
    const [mascota,setMascota]=useState('')
    const [email,setEmail]=useState('')
    const [sintomas,setSintomas]=useState('')
    const [fecha,setFecha]=useState('')
    const [error,setError]=useState(false)


    //----------------------Verificaciones 
     useEffect(()=>{
          if(Object.keys(paciente).length>0){
               setNombre(paciente.nombre)
               setMascota(paciente.mascota)
               setEmail(paciente.email)
               setSintomas(paciente.sintomas)
               setFecha(paciente.fecha)


          }

     },[paciente])

     ////////////////////
     




    //Funcion de geenrar id
    const generarId=()=>{
      const random=Math.random().toString(36).substring(2)
      const fecha=Date.now().toString(36)
     return random+fecha
    }


    
   //Declarando Objecto
    const objectoPaciente={
         nombre,
         mascota,
         email,
         sintomas,
         fecha
        

    } 
    //-----------------------------
    const modificarPaciente=()=>{
      console.log("se esta modificando")
       objectoPaciente.id=paciente.id
       console.table(objectoPaciente);
       console.table(paciente)

       const pacienteActualizado=pacientes.map( elPaciente=>elPaciente.id===paciente.id ?objectoPaciente:elPaciente)
       console.table(pacienteActualizado)
       setPacientes(pacienteActualizado)   
       setPaciente({}) //se Limpia


    }


   const agregarRegistro=()=>{
    objectoPaciente.id=generarId()
    setPacientes([...pacientes,objectoPaciente])
   }



 
   
        



    

    
    //Reset Formulario 
    const resetFormulario=()=>{

      setNombre('')
      setMascota('')
      setEmail('')
      setSintomas('')
      setFecha('')
      setFecha('')
    }


  
    const handlerSubmit=(e)=>{
      e.preventDefault()
      if([nombre,mascota,fecha,email,sintomas].includes('')){
           setError(true)  
          
      }else {
              setError(false)  
              paciente.id ? modificarPaciente():agregarRegistro()
          }
       
        resetFormulario()
      }
      
      


  

  return(
    <div className="md:w-1/2 lg:w-3/5">
         <h2 className=" text-black
                          text-2xl
                          font-bold
                          text-center
                          ">
                            Seguimiento de Pacientes
          </h2>
          <p className='text-xl text-center'>  
            Añade Paciente y {" "}
            <span className='text-indigo-600 font-bold mb-10' >Administralos </span>

          </p>
      
              <form action="" className='bg-white shadow-md roundex-lg 
                                           mt-4 py-10
                                            px-5
                                            mb-10'
                                            onSubmit={handlerSubmit}
                                             >
                 
                        {error && <Error>
                             <p>Debe llenar los campos obligatorio</p>
                        </Error> 
                                   
                       }   
                   
                     <div className='mb-5'>
                         <label htmlFor="nombre" 
                            className='block
                                     text-gray-700
                                     uppercase 
                                     font-bold' >Nombre de la Mascota</label>
                         <input type="text" name="nombre" id="nombre" 
                          placeholder='Nombre de la Mascota'
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md'
                                     value={mascota}
                                     onChange={(e)=>setMascota(e.target.value)}
                                     />
                     </div>

                     <div className='mb-5'>
                         <label htmlFor="nombrePropietario" 
                            className='block
                                     text-gray-700
                                     uppercase 
                                     font-bold' >Nombre del Propietario</label>

                         <input type="text" name="nombrePropietario" id="nombrePropietario" 
                          placeholder='Nombre del Propietario'
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md'
                                     value={nombre}
                                     onChange={(e)=>setNombre(e.target.value)}/>
                     </div>


                     <div className='mb-5'>
                         <label htmlFor="email" 
                            className='block
                                     text-gray-700
                                     uppercase 
                                     font-bold' >Email</label>
                         <input type="email" name="email" id="email" 
                          placeholder='Email del Propietario'
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md'
                                     value={email}
                                     onChange={(e)=>setEmail(e.target.value)}
                                     />
                     </div>

                     <div className='mb-5'>
                         <label htmlFor="fechaAlta" 
                            className='block
                                     text-gray-700
                                     uppercase 
                                     font-bold' >Fecha </label>
                         <input type="date" name="fechaAlta" id="fechaAlta" 
                          placeholder='Fecha de Alta'
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md'
                                     value={fecha}
                                     onChange={(e)=>setFecha(e.target.value)}
                                     />
                     </div>

                     <div className='mb-5'>
                         <label htmlFor="sintomas" 
                            className='block
                                     text-gray-700
                                     uppercase 
                                     font-bold' >Sintomas</label>
                         <textarea name="sintomas" id="sintomas" 
                          placeholder='Sintomas'
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md'
                                     value={sintomas}
                                      onChange={(e)=>setSintomas(e.target.value)}
                                     />
                     </div>

                     <div className='mb-5'>
                         
                         <input type="submit" 
                          name="enviar" id="enviar" 
                          className='w-full
                                     border-2  
                                     p-2 
                                     mt-2
                                     rounded-md
                                     bg-indigo-600
                                     text-white
                                     hover:bg-indigo-800
                                     cursor-pointer

                                     '
                                     value={paciente.id ?'Editar Paciente': 'Agregar Paciente'}
                                     />
                     </div>



                 

              </form>


      </div>
  )
}

export default Formulario