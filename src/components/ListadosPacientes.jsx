import {useEffect} from 'react'
import Paciente from './Paciente'

function ListadosPacientes({pacientes,setPaciente,eliminarPaciente}) {
    
   
 return(
   <div className='md:w-1/2 m-3
                  md:h-screen 
                  overflow-y-scroll 
                  '>
                  {pacientes.length>0 ? (
                      pacientes.map((itemPaciente)=>{
                        return(
          
                              <Paciente 
                                      key={itemPaciente.id} 
                                      itemPaciente={itemPaciente} 
                                      setPaciente={setPaciente}
                                      eliminarPaciente={eliminarPaciente}
                                     
                              />
                            )

                  }
      
                 )

                    ):
                    (
                      <div className='text-center uppercase font-bold'>
                           <p className='text-indigo-800'>no hay paciente </p>
                      </div> 
                       ) }  
                  


   </div>
    
 )
    
}

export default ListadosPacientes