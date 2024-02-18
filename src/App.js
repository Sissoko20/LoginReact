import React, { useState } from "react";
import { social } from "./dbsocial";

function App() {
  const [datasocial, setdatasocial] = useState(social);
  const [nouveauParticipant, setNouveauParticipan] = useState("");

  const handleDel = (id) => {
    console.log(id);

    const copyDataSocial = [...datasocial];
    const updatedcpData = copyDataSocial.filter((element) => element.id != id);
    setdatasocial(updatedcpData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //copy du state
const participantCopy=[...datasocial]

    //manipulation sur la copy de la state
    const id=new Date().getTime();
    const name=nouveauParticipant;
    const montant = nouveauParticipant;
    
    
participantCopy.push({id, name, montant})
    //
    setdatasocial(participantCopy)
    setNouveauParticipan("");
  };
  const handleChange = (event) => {
    setNouveauParticipan(event.target.value)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datasocial.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.montant}</td>
              <button onClick={() => handleDel(element.id)}> Supprimer</button>
            </tr>
          ))}
        </tbody>
      </table>

      <form action="submit" onSubmit={handleSubmit}>
        <input
        value={nouveauParticipant}
          type="text"
          onChange={handleChange}
          placeholder="Ajouter un nom"
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
}
export default App;

//Gestion des liste

//Gestion des formulaires
//1 creation du formulation
/* <form action="submit" onSubmit={}>
                      <input type='text' placeholder="Ajouter un nom"/> 
                      <button>Ajouter</button>

            </form>*/

//
