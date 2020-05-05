import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import uuid from 'uuid/v4';

const AddPage = props => {

    // Declaring All The Form's States Here
    const [id, setId] = useState(uuid());
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [type, setType] = useState("");
    const [company, setCompany] = useState("");
    const [about, setAbout] = useState("");
    const [content, setContent] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    // Declaring The Form's Submit Method Here
    const onSubmitHandler = e => {
        // Declaring an Object it's Data Passed from The Form
        const formValue = { id, title, subTitle, type, company, about, content, imgSrc }
        // Prevent The Page Refreshing & Action
        e.preventDefault()
        // Declaring an Universal Unique Id For Every Game
        setId(uuid())
        // Will Post The Form Value Object to The API End Point From Here
        console.log(formValue);
    }

    // Dump Validator For Serving The Idea of The Validation Only 
    const formData = [id, title, subTitle, type, company, about, content, imgSrc]
    let validator = formData.every(entry => entry.length)

    return (
        <Fragment>
            <Container>
                <Row className="py-3">
                    <Col sm={{ size: 8, offset: 2 }}>
                        <h4 className="text-center my-3">You Can Add New Game to The List From Here</h4>
                        <hr className="bg-white" />
                        <Form autoComplete="off" onSubmit={onSubmitHandler}>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    value={title}
                                    id="title"
                                    placeholder="Game Title or Name Here"
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="type">Type</Label>
                                <Input
                                    type="text"
                                    name="type"
                                    value={type}
                                    id="type"
                                    placeholder="The Game Type ..."
                                    onChange={e => setType(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="company">Company Name</Label>
                                <Input
                                    type="text"
                                    name="company"
                                    value={company}
                                    id="company"
                                    placeholder="The Game Publisher ..."
                                    onChange={e => setCompany(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="subTitle">Game's Slogan</Label>
                                <Input
                                    type="text"
                                    name="subTitle"
                                    value={subTitle}
                                    id="subTitle"
                                    placeholder="The Game Slogan ..."
                                    onChange={e => setSubTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="about">About</Label>
                                <Input
                                    type="text"
                                    name="about"
                                    value={about}
                                    id="about"
                                    placeholder="Short Information ..."
                                    onChange={e => setAbout(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="content">Content</Label>
                                <Input
                                    type="text"
                                    name="content"
                                    value={content}
                                    id="content"
                                    placeholder="The Game Full Information ..."
                                    onChange={e => setContent(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="imgSrc">Image</Label>
                                <Input
                                    type="text"
                                    name="imgSrc"
                                    value={imgSrc}
                                    id="imgSrc"
                                    placeholder="Please Add Image URL ..."
                                    onChange={e => setImgSrc(e.target.value)}
                                />
                            </FormGroup>
                            <Button
                                type="submit"
                                color="primary"
                                disabled={!validator}
                            >
                                Add Game
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddPage;
