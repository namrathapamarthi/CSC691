import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const Sprint = (props) => {
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formSprintPhase">
                    <Form.Label column sm={2}>
                        Sprint Phase
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Sprint_Phase" placeholder={props.sprintInfo.Sprint_Phase} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="formSprintStart_Date">
                    <Form.Label column sm={2}>
                        Start Date
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Start_Date" placeholder={props.sprintInfo.Start_Date} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="formSprintEnd_Date">
                    <Form.Label column sm={2}>
                        End Date
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="End_Date" placeholder={props.sprintInfo.End_Date} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            {
                props.sprintAction === "DisplaySprint" ?
                    <center>
                        <Button variant="success" onClick={() => { props.onShowUserStories() }} >UserStories</Button>
                        <Button variant="secondary" onClick={() => { props.previousPage() }} >back</Button>
                    </center>
                    :
                    props.sprintAction === "EditSprint" ?
                        <center>
                            <Button variant="success" onClick={() => { props.saveSprint() }}> Save </Button>
                        </center>
                        : <center><Button variant="success" onClick={() => { props.saveSprint() }}> Add </Button></center>
            }
        </div>

    );
}

export default Sprint;