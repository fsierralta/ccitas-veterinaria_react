import React  from 'react'

 function Paciente ({itemPaciente,setPaciente,eliminarPaciente}) {
    const{nombre,mascota,email,sintomas,fecha}=itemPaciente


    const handlerEliminar=()=>{
        const respuesta=window.confirm("Desea Eliminar:?")
        respuesta ?eliminarPaciente(itemPaciente.id):false




    }
    return (
        <div className='mt-3
                bg-white 
                shadow-md 
                px-5 py-10
                roundex-xl
                border-2
                

              
        '>
                <div >
                    <p className='font-bold 
                            text-grey-700

                    '>Nombre:{' '} 
                        <span>{mascota}</span>
                    </p>
                </div> 

                <div>
                    <p className='font-bold 
                            text-grey-700

                    '>Nombre Propietario:{' '} 
                        <span>{nombre}</span>
                    </p>
                </div> 

                <div>
                    <p className='font-bold 
                            text-grey-700

                    '>Email:{' '} 
                        <span>{email}</span>
                    </p>
                </div> 

                <div>
                    <p className='font-bold 
                            text-grey-700

                    '>Fecha Alta:{' '} 
                        <span>{fecha}</span>
                    </p>
                </div> 

                <div>
                    <p className='font-bold 
                            text-grey-700

                    '>Sintomas:{' '} 
                        <span>{sintomas}</span>
                    </p>
                </div > 

                     
                <div className='flex justify-between'>
                <button type="button"
                        className='bg-green-300 rounded-md py-2 px-2
                                hover:bg-green-600 text-white font-bold 
                                uppercase
                                 mt-4 '
                         onClick={()=> setPaciente(itemPaciente)}    
                      
                      >Editar</button>
                       <button type="button"
                        className='bg-red-300 rounded-md py-2 px-2
                                hover:bg-red-600 text-white font-bold 
                                uppercase
                                 mt-4 
                                 ml-4
                                 '
                      onClick={handlerEliminar}
                      >Eliminar</button>




                </div>
         

          



        </div>
      
    )
 
}

export default Paciente