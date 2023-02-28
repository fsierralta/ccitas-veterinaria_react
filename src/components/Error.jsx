
function Error({children}){
    //children palabra reservada rect js
    return(
        <div className='bg-red-600 text-white rounded-md font-bold-700 py-4
                                                   text-center mb-4'>
                                        {children}
        </div>


         )


}

export default  Error