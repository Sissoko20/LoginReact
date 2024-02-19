import React from 'react'
import {data} from './dataTest'

function App() {
  var userId=true

  const products= [
    { title: 'Chou', id: 1, isFruit:false, isAvailable:false  },
    { title: 'Ail', id: 2, isFruit:false, isAvailable:false  },
    { title: 'Pomme', id: 3, isFruit:true, isAvailable:true },
  ];

  const listsUserSocial=data.map(el=>
    <li key={el.id} style={{color:el.userId=="1" ? "brown":"gray"}}>{el.title}</li>)


  const listItems=products.map(produit=>
    <li key={produit.id} style={{color: produit.isFruit ? "green" : "red", fontSize:produit.isAvailable ? 50: 20}}>
      {produit.title}
    </li>
    )
  return(
    <div>
     <ul>{listsUserSocial}</ul>

    </div>
  )
  
}
export default App;