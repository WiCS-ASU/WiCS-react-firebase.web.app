import { Card } from "react-bootstrap";

function Sponsorships(props){
    return(   
      <Card>
      <Card.Header className= "bg-light">Quote</Card.Header>
      <Card.Body>
        {props.image}
      </Card.Body>
    </Card>
    );
}
export default Sponsorships;