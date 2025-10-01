import React, { useState } from 'react'
import {createDonut} from '../../core/services/donutsFetch'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuOption } from '../../pages/HomePage/HomePageAction'

const CreateAndEditComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
      const {menuOption} = useSelector(state => state.menuReducer)
    const [donuts, setDonuts] = useState({
        name: "",
        type: "",
        price: "",
        image: ""
    })

    const create = async (donuts) => {
        const res =  await createDonut(donuts)
        if(res.status === 'Success'){
            console.log('Create Donut')
            setDonuts({
                 name: "",
                 type: "",
                 price: "",
                 image: ""
            },
        alert('Donut Creado'))
        navigate("/list")
        dispatch(
            changeMenuOption(1)
        )
            
        }

    }

    const goToHome = () => {
         setDonuts({
                 name: "",
                 type: "",
                 price: "",
                 image: ""
            }),
            dispatch(
                changeMenuOption(1)
            )
            navigate("/list")
    }

      return (
    <div>
        <div className='containerFormCreate'>
            <h2 className='titleFormCreate'>Crear Donuts</h2>
            <div className='containerFormCreateCart'>
            <div className='containerFormCreateInput'>
                <label className='labelContainerFormCreate' htmlFor="">nombre: </label>
                <input  type="text" name='name' value={donuts.name} onChange={(e) => setDonuts({ ...donuts, [e.target.name]: e.target.value })} />
            </div>
            <div  className='containerFormCreateInput'>
                <label className='labelContainerFormCreate' htmlFor="">tipo: </label>
                <input type="text" name='type' value={donuts.type} onChange={(e) => setDonuts({ ...donuts, [e.target.name]: e.target.value })} />
            </div>
            <div  className='containerFormCreateInput'>
                <label className='labelContainerFormCreate' htmlFor="">precio: </label>
                <input type="Number"  name='price' value={donuts.price} onChange={(e) => setDonuts({ ...donuts, [e.target.name]: e.target.value })}/>
            </div>
            <div  className='containerFormCreateInput'>
              <label className='labelContainerFormCreate' htmlFor="">imagen: </label>
                <input type="text" placeholder='Url de la imagen' name='image' value={donuts.image} onChange={(e) => setDonuts({ ...donuts, [e.target.name]: e.target.value })} /> {/*  Actualiza solo la propiedad del estado correspondiente al input que cambió, copiando el resto de propiedades del objeto donuts para no perderlas.*/}
            </div>
            <div  className='containerButtonFormCreate'>
                <button className='ButtonFormCreate' onClick={() => {create(donuts)}}>Crear</button>
                <button className='ButtonFormCreate' onClick={goToHome}>Cancelar</button>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAndEditComponent
