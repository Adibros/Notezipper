import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import notes, {} from '../../data/notes'

const MyNotes = () => {

    const deleteHandler = (id) =>{
        if(window.confirm("Are you sure")){

        }
    }

  return (
    <MainScreen title='Welcome back Aditya..'>
        <Link to="createnote">
            <Button style={{marginLeft:10,marginBottom:6}} size="m">
                Create New Note
            </Button>
        </Link>
            {
                notes.map(note =>(
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Card style={{margin : 10}}>
                            <Card.Header style={{display : "flex"}}>
                                <span style={{
                                    color:"black",
                                    textDecoration:"none",
                                    flex:1,
                                    cursor:"pointer",
                                    alignSelf:"center",
                                    fontSize: 18
                                }}>
                                    <Accordion.Header style={{outline : "none"}}>{note.title}</Accordion.Header>
                                </span> 
                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button variant='danger' onClick={() => deleteHandler(note._id)}>Delete</Button>
                                </div>
                            </Card.Header>

                            <Accordion.Body eventKey="0">
                            <Card.Body>
                                <h4>
                                    <Badge bg="success"> category - {note.category}</Badge>
                                </h4>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {note.content}
                                </p>
                                <footer className="blockquote-footer">
                                    Created on -date
                                </footer>
                                </blockquote>
                            </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                    </Accordion>
                ))
            }
    
    </MainScreen>
  )
}

export default MyNotes