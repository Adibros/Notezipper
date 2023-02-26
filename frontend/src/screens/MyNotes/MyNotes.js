import {React,useEffect} from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

import axios from "axios";
import { deleteNoteAction, listNotes } from '../../redux/actions/notesActions';

const MyNotes = ({search}) => {

    const dispatch = useDispatch();
    const noteList = useSelector(state => state.noteList)
    const { loading,notes,error} = noteList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const noteCreate = useSelector(state => state.noteCreate);
    const { success:successCreate } = noteCreate;

    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success:successUpdate } = noteUpdate;
    // rename this state success as successUpdate

    const noteDelete = useSelector((state) => state.noteDelete);
    const { loading:loadingDelete, error:errorDelete,success:successDelete } = noteDelete;
    


    const navigate = useNavigate();

    useEffect(() => {
        dispatch(listNotes());
        if(!userInfo){  
            navigate('/')
        }
    }, [dispatch,successCreate,successUpdate,userInfo,successDelete])
    

    const deleteHandler = (id) =>{
        if(window.confirm("Are you sure")){
            dispatch(deleteNoteAction(id));
        }
    }

  return (
    <MainScreen title={`Welcome back ${userInfo.name}..`}>
        <Link to="/createnote">
            <Button style={{marginLeft:10,marginBottom:6}} size="m">
                Create New Note
            </Button>
        </Link>
        {errorDelete && (
            <ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading/>}
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {loading && <Loading />}
            {
                notes
                    ?.reverse()
                    .filter((filteredNote) =>
                        filteredNote.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(note =>(
                    <Accordion key={note._id}>
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
                                    Created on{" "}
                                    <cite title='Source Title'>
                                        {note.createdAt.substring(0,10)}
                                    </cite>
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