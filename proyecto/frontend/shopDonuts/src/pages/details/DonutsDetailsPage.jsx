import React, { useEffect, useState } from 'react'
import { editDonuts } from '../../core/services/donutsFetch'


const DonutsDetailsComponent = (props) => {
  const[isEdit, setIsEdit] = useState(false)
    const{
        donutsDetails,
        setDonutsDetails,
        deleteD,
        allDonuts
    } = props

    
        
        const backToList = () => {
            setDonutsDetails(undefined)
            allDonuts()
        }

      

       const edit = async () => {
  const res = await editDonuts( donutsDetails._id, donutsDetails);
  if (res.status === "Success") {
    alert("Donut editado");
    setIsEdit(false);
    backToList()
  } else {
    alert("Error al editar el donut");
    
  }
};


       
  return (
    <div>
      {isEdit ? (
        <>
            <div className='containerEdit'>
            <h2 className='titleEdit'>Editar</h2>
            <div>
                <span className='spanEdit'>Id: </span>
                <input className='inputEdit' type="text" name='_id' value={donutsDetails._id} disabled readOnly />
            </div>
            <div>
                <span className='spanEdit'>Nombre: </span>
                <input className='inputEdit' type="text" name='name' value={donutsDetails.name} onChange={(e) => setDonutsDetails({ ...donutsDetails, name: e.target.value })}/>
            </div>
            <div>
                <span className='spanEdit'>Tipo: </span>
                <input className='inputEdit' type="text" name='type' value={donutsDetails.type} onChange={(e) => setDonutsDetails({ ...donutsDetails, type: e.target.value })}/>
            </div>
            <div>
                <span className='spanEdit'>Precio: </span>
                <input className='inputEdit' name='price' value={donutsDetails.price} type="text" onChange={(e) => setDonutsDetails({ ...donutsDetails, price: e.target.value })}/>
            </div>
            <div>
                <span className='spanEdit'>Imagen: </span>
                <input  className='inputEdit' type="text" placeholder='Url de la imagen' value={donutsDetails.image} onChange={(e) => setDonutsDetails({ ...donutsDetails, image: e.target.value })} />
            </div>
             <div className='containerButtonEdit'>
                <button className='buttonEdit' onClick={edit}>Guardar</button>
                
                <button className='buttonEdit' onClick={backToList}>Cancelar</button>
            </div>
        </div>
      </>
    
        
      ) : (
        <>
      <div className='containerDetails' >
                <div className='cardDetails'>
                        <div className='containerDetailsInfo'>
                            
                            <span className='spanDetailsInfo'>id:  {donutsDetails._id}</span>
                            <span className='spanDetailsInfo'>Nombre: {donutsDetails.name}</span>
                            <span className='spanDetailsInfo'>Tipo: {donutsDetails.type}</span>
                            <span className='spanDetailsInfo'>Precio: {donutsDetails.price} €</span>
                           
                        </div>
                         <div>
                    <img className='imgDetails' src={donutsDetails.image} alt="" />
                </div>
               
                </div>
                 <div className='containerButton'>
                    <button className='buttonLogin' onClick={() => {setIsEdit(true)}}>Editar</button>
                    <button className='buttonLogin' onClick={() => deleteD(donutsDetails._id)}>Eliminar</button>
                    <button className='buttonLogin' onClick={backToList}>Volver</button>
                </div>
               
      </div>
        </>
      )}
      </div>
  )
}

export default DonutsDetailsComponent


