import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import pic3 from './images/pic3.png'

function Carousels() {
    return (
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default Carousels;