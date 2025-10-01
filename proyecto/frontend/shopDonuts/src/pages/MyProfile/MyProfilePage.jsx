import React from 'react'
import { useSelector } from 'react-redux';
const MyProfilePage = () => {
     const user = useSelector((state) => state.loginReducer.user);
  return (
    <div className='containerMyProfile'>
       <div className='containerMyProfileCart'>
        <div>
            <h2 className='titleProfile'>Mi Perfil</h2>
        </div>
        <div>
            <div>
                <span className='spanProfile'>Nombre: </span>
                <span className='spanProfile2'>{user.name}</span>
            </div>
            <div>
                <span className='spanProfile'>Email: </span>
                <span  className='spanProfile2'>{user.email}</span>
            </div>
            <div>
                <span className='spanProfile'>city: </span>
                <span  className='spanProfile2'>{user.city}</span>
            </div>
            <div>
                <span className='spanProfile'>Telefono: </span>
                <span  className='spanProfile2'>{user.numberPhone}</span>
            </div>
            <div>
               <div>
  <span className='spanProfile'>Favoritos: </span>
    <span  className='spanProfile2'>{user.favoritesDonuts.join(", ")}</span>
</div>

            </div>
        </div>
        </div> 
    </div>
  )
}

export default MyProfilePage
