import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGame } from '../actions';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { deleteGame } from '../actions';

const GameDetails = props => {
    const { imgSrc, title, subTitle, type, about, content, id } = props.game
    useEffect(() => {
        props.fetchGame(props.match.params.id)
    }, [])
    // Declaring The state of The Modal Here
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const deleteHandler = () => {
        toggle()
    }

    const renderCard = () => {
        if ({ imgSrc, title, subTitle, type, about, content, id }) {
            return (
                <Row className="py-3">
                    <Col>
                        <Card className="bg-dark">
                            <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    <h4 className="text-uppercase text-white font-weight-bold">{title}</h4>
                                </CardTitle>
                                <CardSubtitle>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">Slogan:
                                    </span> {subTitle}</CardSubtitle>
                                <CardText>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">Type:
                                    </span> {type}</CardText>
                                <CardText>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">About Game:
                                    </span> {about}
                                </CardText>
                                <CardText>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">Full Information:
                                    </span> {content}
                                </CardText>
                                <Button color="danger" onClick={deleteHandler}>Delete</Button>
                                <Link className="mx-3" to={`/edit/${id}`}>
                                    <Button color="success">Edit</Button>
                                </Link>
                            </CardBody>
                        </Card>
                        {/* Modal Body Here */}
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalBody className="bg-dark p-5">
                                <h5>Are You Sure You Want to Delete This Game</h5>
                            </ModalBody>
                            <ModalFooter className="p-2">
                                <Button
                                    color="danger"
                                    onClick={() => {
                                        toggle(); props.deleteGame(id); setTimeout(() => {
                                            props.history.push("/")
                                        }, 2000);
                                    }}
                                >
                                    Yes
                                </Button>
                                <Button color="default" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        {/* Modal Body Here */}
                    </Col>
                </Row>
            )
        }
        return <p>Loading ...</p>
    }

    return (
        <Container>
            <Button color="primary">
                <Link to="/">Back Home</Link>
            </Button>
            {renderCard()}
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps,
    { fetchGame, deleteGame }
)(GameDetails);
