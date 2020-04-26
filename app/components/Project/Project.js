import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

import DataAnalysis from './DataAnalysis';
import GraphAnalysis from './GraphAnalysis';

const Project = (props) => {
    return (
        <div>
            {
                props.projectAction === "PerformDataAnalysis" ?
                    <DataAnalysis
                        projectInformation={props.projectInfo}
                        projectBurnDetails={props.projectBurnDetails}
                        onGraphAnalysis={() => props.GraphAnalysis()}
                    />
                    :
                    <div>
                        <Form>
                            <Form.Group as={Row} controlId="formProjectName">
                                <Form.Label column sm={2}>
                                    Project Name
                     </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" name="Project_Name" placeholder={props.projectInfo.Project_Name} onChange={e => { props.onChange(e) }} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group as={Row} controlId="formProjectClientName">
                                <Form.Label column sm={2}>
                                    Client Name
                     </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" name="Client_Name" placeholder={props.projectInfo.Client_Name} onChange={e => { props.onChange(e) }} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group as={Row} controlId="formProjectType">
                                <Form.Label column sm={2}>
                                    Project Type
                     </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" name="Project_Type" placeholder={props.projectInfo.Project_Type} onChange={e => { props.onChange(e) }} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group as={Row} controlId="formProjectStart_Date">
                                <Form.Label column sm={2}>
                                    Start Date
                     </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" name="Start_Date" placeholder={props.projectInfo.Start_Date} onChange={e => { props.onChange(e) }} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group as={Row} controlId="formProjectEnd_Date">
                                <Form.Label column sm={2}>
                                    End Date
                                </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" name="End_Date" placeholder={props.projectInfo.End_Date} onChange={e => { props.onChange(e) }} />
                                </Col>
                            </Form.Group>
                        </Form>
                        {
                            props.projectAction === "PerformGraphAnalysis" ?
                                <GraphAnalysis
                                    projectGraphDetails={props.projectGraphDetails} />
                                :
                                null
                        }
                        {
                            props.projectAction === "Display" ?
                                <div>
                                    <center>
                                        <Button variant="primary" onClick={() => { props.performDataAnalysis() }}> Perform Data Analysis</Button>
                                        <Button variant="success" onClick={() => { props.springInformationHanlder() }}>Sprint Information</Button>
                                        <Button variant="secondary" onClick={() => { props.previousPage() }} > back </Button>
                                    </center>
                                </div>
                                :
                                null
                        }
                        {
                            props.projectAction === "Edit" ?
                                <center>
                                    <Button variant="success" onClick={() => { props.updateProject() }} > Save </Button>
                                </center> : null
                        }
                        {
                            props.projectAction === "New" ?
                                <center>  <Button variant="success" onClick={() => { props.addProject() }} > Add </Button></center>
                                : null
                        }
                    </div>
            }

        </div>
    );
}

export default Project;