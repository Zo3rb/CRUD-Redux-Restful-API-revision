import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGame } from '../actions';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const GameDetails = props => {
    const { imgSrc, title, subTitle, type, about, content } = props.game
    useEffect(() => {
        props.fetchGame(props.match.params.id)
    }, [])

    const renderCard = () => {
        if ({ imgSrc, title, subTitle, type, about, content }) {
            return (
                <Row className="py-3">
                    <Col>
                        <Card className="bg-dark">
                            <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-primary"
                                >
                                    <span
                                        className="text-white font-weight-bold text-capitalize">Name:
                                    </span> {title}
                                </CardTitle>
                                <CardSubtitle>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">Slogan:
                                    </span> {subTitle}</CardSubtitle>
                                <CardText>
                                    <span
                                        className="text-primary font-weight-bold text-capitalize">Type:
                                    </span> {type}</CardText>
                                <CardText>{about}</CardText>
                                <CardText>{content}</CardText>
                            </CardBody>
                        </Card>
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

export default connect(mapStateToProps, { fetchGame })(GameDetails);
