import React from 'react';

function CharacterCard(props) {
  return (
      <div className="card" onClick={props.onClick}>
          
              <img src={props.image}className="card-img-top" alt="..." />
         

      </div>
  )
}
  
  export default CharacterCard;