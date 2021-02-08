import React from 'react';
import { CardGroup ,Card,  } from 'react-bootstrap';
import './Home.css'


function Home(){
    return(
        <div>
           <img  src="/img/hos.jpg" alt=""/>
           <h1>US-STYLE HOSPITAL<br></br>IN NIGERIA</h1>
          
           
           <CardGroup>
  <Card className='vvv'>
    <Card.Img variant="down" src="img/xxx.jpg" />
    <Card.Body>
      <Card.Title>CANCER TREATMENT</Card.Title>
      <Card.Text>
      Our goal is to ensure that our patients live successfully and comfortably despite a cancer diagnosis. Our teamof cancer specialists(onocologists),surgeons,nures etc worl together
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='vvv'>
    <Card.Img variant="top" src="img/ccc.jpg" />
    <Card.Body>
      <Card.Title><h3>Our lab</h3></Card.Title>
      <Card.Text>{' '}
      Many of your Science units will require you to write a formal laboratory report. The purpose is to report on what you did, what you learned from an experiment and why the findings matter.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='vvv'>
    <Card.Img variant="top" src="img/nnn.jpg" />
    <Card.Body>
      <Card.Title><h3>Qualified Doctors</h3></Card.Title>
      <Card.Text>
      Our staff provides exceptional and compassionate care to our patients.
      your care is our priority..we offer the highest quality of care
      In theory it is better to go to qualified doctors as they have gone through exhaustive training at medical school and at least they will know what they are sticking the needles into!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>


        
  
        </div>
    );
}

export default Home;
