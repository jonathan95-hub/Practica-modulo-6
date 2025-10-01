export const getDonutsFetch = async () => {
  const res = await fetch("http://localhost:3000/shopdonuts/donuts/list", {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Error al obtener los donuts");
  }

  const result = await res.json();
  return result;
};

export const favDonuts = async (idDonuts, userId) => {

  try {
     const res = await fetch(`http://localhost:3000/shopdonuts/user/${idDonuts}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {userId} ),
  });
  const result = await res.json();
  return result;
  } catch (error) {
    console.error('error en favDonuts', error)
    return null
  }
 
};

export const deleteToFav = async (idDonuts, userId) => {
  try {
    const res = await fetch(`http://localhost:3000/shopdonuts/user/${idDonuts}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId})
    })
    const result = await res.json()
    return result
  } catch (error) {
     console.error('error en deleteToFav', error)
    return null
  }
}

export const createDonut = async (donut) => {
  try {
    
    console.log(donut)
    const res = await fetch("http://localhost:3000/shopdonuts/donuts/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donut)
    })
    const result = await res.json()
    return result
  } catch (error) {
    console.error('error en createDonuts', error)
    return null
  }
}

export const editDonuts = async (idDonuts, donut) => {
 
  const res = await fetch(`http://localhost:3000/shopdonuts/donuts/list/${idDonuts}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donut)
  })
  const result = await res.json()
  return result
}

export const deleteDonuts = async (idDonuts) => {
  const res = await fetch(`http://localhost:3000/shopdonuts/donuts/list/${idDonuts}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
   
  })
  const result = await res.json()
  return result
}
