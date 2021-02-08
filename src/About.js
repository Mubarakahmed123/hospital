import React from 'react';
import './About.css'
import { CardGroup ,Card, col, Image , Button} from 'react-bootstrap';






function About(){
    return(

       
        <div>
          <CardGroup>
  <Card className="bvn">
    <Card.Img variant="down" src="img/ooo.jpg" />
    <Card.Body>
      <Card.Title>Company Overview</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
   
  </Card>
  <Card className="bvn">
    <Card.Img variant="down" src="img/chat.jpg" />
    <Card.Body>
      <Card.Title>Our Message</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
  
  </Card>
  <Card className="bvn">
    <Card.Img variant="down" src="img/bod.jpg" />
    <Card.Body>
      <Card.Title>Board of Directors</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
   
  </Card>
</CardGroup>

<CardGroup>
  <Card className="bvn">
    <Card.Img variant="down" src="img/ooo.jpg" />
    <Card.Body>
      <Card.Title>Management Team</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.


      

      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
    
  </Card>
  <Card className="bvn">
    <Card.Img variant="down" src="img/award.jpg" />
    <Card.Body>
      <Card.Title>Awards</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
       
      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
    
  </Card>
  <Card className="bvn">
    <Card.Img variant="down" src="img/pro.jpg" />
    <Card.Body>
      <Card.Title>Promotion</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
   

      </Card.Text>
      

      <Button variant="outline-primary">Enter</Button>{' '}
    </Card.Body>
  
  </Card>
</CardGroup>
         
  
           
        </div>
    );
}


export default About;