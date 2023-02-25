import {React , useEffect, useState} from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import ErrorMessage from '../../components/ErrorMessage';
import MainScreen from '../../components/MainScreen'
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../redux/actions/userActions';

const RegisterScreen = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const userRegister = useSelector((state) => state.userRegister);
  const { loading,error,userInfo } = userRegister;


  useEffect(() => {
    if(userInfo){
      navigate('/mynotes');
    }
  }, [userInfo,navigate]);
  

  const submitHandler = (e) =>{
    e.preventDefault();

    if(password!== confirmPassword){
      setMessage('Passwords Do not Match');
    }else{
        dispatch(register(name,email,password));   
    }
  }


  return (
    <MainScreen title='REGISTER'>

      <div className='loginContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/>}
        
        <Form onSubmit={submitHandler}>

          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{marginTop:'20px'}}>
            Submit
          </Button>

          <Row className = "py-3">
                <Col>
                    Have an Account ? <Link to="/login">Login</Link>
                </Col>
          </Row>

        </Form>
      </div>
    </MainScreen>
  )
}

export default RegisterScreen