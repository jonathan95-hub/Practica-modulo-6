import React, { useEffect, useState } from "react";
import { deleteDonuts, favDonuts, getDonutsFetch } from "../../core/services/donutsFetch";
import { useDispatch, useSelector } from "react-redux";
import { listDonuts } from "./ListAction";
import { add, remove } from "../LoginPage/LoginAction";
import DonutsDetailsComponent from "../details/DonutsDetailsPage"
import { deleteToFav } from "../../core/services/donutsFetch";

const ListPage = () => {
  const user = useSelector((state) => state.loginReducer.user);
  const donuts = useSelector((state) => state.DonutsReducer.Donuts);
  const[DonutsDetails, setDonutsDetails] = useState(undefined)
  const dispatch = useDispatch();

  const allDonuts = async () => {
    const res = await getDonutsFetch();
    console.log("Donuts del backend:", res);
    dispatch(listDonuts(res.allDonuts));
    return;
  };




 

  const Fav = async (donutsId, userId) => {
    
    const itsIsFavorites = user.favoritesDonuts.includes(donutsId);
    let res
    if(itsIsFavorites){
      res = await deleteToFav(donutsId, userId);
    }
    else{
        res = await favDonuts(donutsId, userId);
    }
    if (res.status === 'Success') {
      if (itsIsFavorites) {
        dispatch(remove(donutsId));
      } else {
        dispatch(add(donutsId));
        
      }
    }
    console.log('res', res)
  };


 const deleteD = async (idDonuts) => {
  const res = await deleteDonuts(idDonuts);
  if(res.status === 'Success'){
    allDonuts()
    setDonutsDetails(false)

    
  }
 }

  useEffect(() => {
 
  console.log("User updated:",{user});
}, [{user}]);

  useEffect(() => {
    allDonuts()
  }, []);

  return (
    <>
    {DonutsDetails ? (
    
      <DonutsDetailsComponent 
      donutsDetails={DonutsDetails}
      setDonutsDetails={setDonutsDetails}
      deleteD={deleteD}
      allDonuts={allDonuts}/>
    ) :
     (
         <div>
      {donuts && donuts.length > 0 ? (
        <div className="containerListStructure">
          {donuts.map((d, idx) =>
            donuts.length <= 4 ? (
              <div className="containerList">
                <div key={idx} className="containerListcart">
                  <div className="containerInputFav">
                    <input id="fav" className='input-list' type="checkbox"  checked={user.favoritesDonuts.includes(d._id)} onChange={() => {Fav(d._id,  user._id)}}/>
                  </div>
                  <div
                    className="containerListEntity"
                  >
                    <span className="spanList">Id: </span>
                    <span>{d._id}</span>
                  </div>
                  <div
                   className="containerListEntity"
                  >
                    <span className="spanList">Nombre: </span>
                    <span>{d.name}</span>
                  </div>
                  <div>
                    <img
                      src={d.image}
                      alt=""
                     className="imgList"
                    />
                  </div>
                  <div className="containerListEntity">
                    <span className="spanList">Precio: </span>
                    <span>{d.price} €</span>
                  </div>

                  <div className="containerListEntity">
                    <button className="buttonLogin" onClick={() => setDonutsDetails(d)}>Ver</button>
                    <button className="buttonLogin" onClick={() => deleteD(d._id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            ) : (
              <div  className="containerList2">
                <div key={idx} className="containerListcart">
                  <div
                   className="containerInputFav"
                  >
                    <input id="fav" className='input-list' type="checkbox"  checked={user.favoritesDonuts.includes(d._id)} onChange={() => {Fav(d._id,  user._id)}}/>
                  </div>
                  <div
                    className="containerListEntity"
                  >
                    <span className="spanList">Id: </span>
                    <span>{d._id}</span>
                  </div>
                  <div
                   className="containerListEntity"
                  >
                    <span className="spanList">Nombre: </span>
                    <span>{d.name}</span>
                  </div>
                  <div>
                    <img
                      src={d.image}
                      alt=""
                     className="imgList"
                    />
                  </div>
                  <div className="containerListEntity">
                    <span className="spanList">Precio: </span>
                    <span>{d.price} €</span>
                  </div>

                  <div className="containerListEntity">
                    <button className="buttonLogin" onClick={() => setDonutsDetails(d)}>Ver</button>
                    <button className="buttonLogin" onClick={() => deleteD(d._id)} >Eliminar</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div
         className="containerListStructure"
        >
          <img src="/No hay donuts en la lista.png" alt="" />
        </div>
      )}
    </div>
     )}
   
    </>
  );
};

export default ListPage;
