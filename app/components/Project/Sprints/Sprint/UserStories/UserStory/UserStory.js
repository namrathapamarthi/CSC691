import React from 'react';
import { Button, Form, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const UserStory = (props) => {
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formUserStoryName">
                    <Form.Label column sm={2}>
                        User Story Name
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="User_Story_Name" placeholder={props.userStoryInfo.User_Story_Name} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="formDeveloperName">
                    <Form.Label column sm={2}>
                        Developer Name
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Developer_Name" placeholder={props.userStoryInfo.Developer_Name} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="formTesterName">
                    <Form.Label column sm={2}>
                        Tester Name
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Tester_Name" placeholder={props.userStoryInfo.Tester_Name} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="formAcceptanceCriteria">
                    <Form.Label column sm={2}>
                        Acceptance Criteria
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Acceptance_Criteria" placeholder={props.userStoryInfo.Acceptance_Criteria} onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form.Group as={Row} controlId="formStoryPoint">
                <Form.Label column sm={2}>
                    Story Point
                     </Form.Label>
                <Col sm={5}>
                    <Form.Control type="text" name="Story_Point" placeholder={props.userStoryInfo.Story_Point} onChange={e => { props.onChange(e) }} />
                </Col>
            </Form.Group>
            <Form>
                <Form.Group as={Row} controlId="formTotalHours">
                    <Form.Label column sm={2}>
                        Total Hours
                     </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="Total_Hours" placeholder={props.userStoryInfo.Total_Hours} readOnly onChange={e => { props.onChange(e) }} />
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[0].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[0].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[0].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[0].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[0].Current_Status}
                            name="Phase_Details[0].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[1].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[1].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[1].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[1].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[1].Current_Status}
                            name="Phase_Details[1].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[2].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[2].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[2].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[2].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[2].Current_Status}
                            name="Phase_Details[2].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[3].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[3].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[3].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[3].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[3].Current_Status}
                            name="Phase_Details[3].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[4].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[4].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[4].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[4].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[4].Current_Status}
                            name="Phase_Details[4].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Row} controlId="form">
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[5].Phase_Name" placeholder={props.userStoryInfo.Phase_Details[5].Phase_Name} readOnly={true} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" name="Phase_Details[5].Hours_Spent" placeholder={props.userStoryInfo.Phase_Details[5].Hours_Spent} onChange={e => { props.onChange(e) }} />
                    </Col>
                    <Col sm={4}>
                        <select
                            value={props.userStoryInfo.Phase_Details[5].Current_Status}
                            name="Phase_Details[5].Current_Status"
                            onChange={e => { props.onChange(e) }}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </Col>
                </Form.Group>
            </Form>
            <center>
                {
                    props.userStoryAction === "EditUserStory" ?
                        <Button variant="success" onClick={() => { props.saveUserStory("Save") }}> Save </Button>
                        : <Button variant="success" onClick={() => { props.saveUserStory("Add") }}> Add </Button>
                }
            </center>
        </div>
    );
}

export default UserStory;