import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const SingleGame = props => {
    // Destructuring My Props to Consume into the Component
    const { imgSrc, title, subTitle, about, id } = props.game
    return (
        <Row className="py-3 my-2">
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 0 }}>
                <img src={imgSrc} className="img-fluid w-100 h-100" alt={title} />
            </Col>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 0 }} className="d-flex flex-column justify-content-center">
                <div className="">
                    <h4 className="font-weight-bold text-primary">{title}</h4>
                    <h6>{subTitle}</h6>
                    <p>{about}</p>
                    <Link
                        className="text-primary"
                        to={`/game-details/${id}`}
                        style={{ textDecoration: 'underline' }}
                    >
                        Details
                    </Link>
                </div>
            </Col>
        </Row>
    );
}

export default SingleGame;
