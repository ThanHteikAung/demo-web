import { Container, Row, Col } from "reactstrap";

const Partner = ({ partner }) => {
    
    if (partner) {
        const { name, image, description } = partner;
        return (
            <Container>
                <Row>
                    <Col md='2'>
                        <img src={image} alt={name} style={{ width: '150px' }}></img>
                    </Col>
                    <Col>
                        <div className='m-4'>
                            <h5 className='fw-bold'>{name}</h5>
                            {description}

                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
    return null;
};

export default Partner;