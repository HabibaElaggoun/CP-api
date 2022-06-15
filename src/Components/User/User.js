import React from 'react'
import { Button } from 'react-bootstrap'
import "./user.css"


const User = ({el}) => {
  return (
    <div className='card'>
<div className="card-container">
  <span className="pro">{el.id}</span>
  <img className="round" src="data:image/png;base64,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" alt="user" width={100} />
  <h2>{el.name} {el.username}</h2>
  <h3>{el.email}</h3>

  <div className="buttons">
    <Button className="primary">
     {el.phone}
    </Button>
    <Button className="primary ghost">
     {el.website}
    </Button>
  </div>
  <div className="skills">
  <h5>Address</h5>
		<ul>
			<li>Street : {el.address.street}</li>
			<li>Suite : {el.address.suite}</li>
			<li>City : {el.address.city}</li>
			<li>Zipcode : {el.address.zipcode}</li>
			<li>Geo : 
                lat :{el.address.geo.lat}
              <br/>  Geo : lng: {el.address.geo.lng}
            </li>
		</ul>
  </div>
  
  <div className="skills">
  <h5>Company</h5>
		 <ul>
			<li>Name : {el.company.name}</li>
			<li>CatchPhrase : {el.company.catchPhrase}</li>
			<li>bs : {el.company.bs}</li>
			
		</ul>
  </div>
</div>




    </div>
  )
}

export default User