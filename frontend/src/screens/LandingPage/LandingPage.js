import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = () => {

    // useEffect(() => {
      
    //     const userInfo = localStorage.getItem('userInfo');
        
    //     if(userInfo){
    //         history.push("/mynotes");
    //     }
    // }, [history]);


  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>Welcome to Notezipper</h1>
                        <p className='subtitle'>One Stop place for Notes</p>
                    </div>
                    <div className='button-container'>
                        <a href='/login'>
                            <Button size='lg' className='langingbutton'>
                                Login
                            </Button>
                        </a>

                        <a href='/register'>
                            <Button size='lg' className='langingbutton' >
                                Signup
                            </Button>
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    
    </div>
  )
}

export default LandingPage