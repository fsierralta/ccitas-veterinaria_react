import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadosPacientes from "./components/ListadosPacientes"
Formulario
function App() {
     const [pacientes,setPacientes]=useState([])
     const [paciente,setPaciente]=useState({}) //objecto que se usa para modificar el  registro


     useEffect(()=>{
       
        const getLocalStore=()=>{
            
                  const pacientesLocalStore=JSON.parse( localStorage.getItem("pacientes")) ?? []  
                  setPaciente(pacientesLocalStore)
                }
       getLocalStore()

     },[])
     
     useEffect(()=>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes))

     },[pacientes])

     
    const eliminarPaciente=(id)=>{
       console.log(`Eliminar: ${id} `)
       const eliminarItem=pacientes.filter( item=>item.id!==id  )
       setPacientes(eliminarItem)

    }     
    


  return (
    <div className="container mx-auto  ">
        <Header/>
          <div className="mt-12 md:flex ">
            <Formulario 
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
              
            />
            <ListadosPacientes
              pacientes={pacientes} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
             
            />  
          </div>  
     

        
    </div>
  )
}

export default App
