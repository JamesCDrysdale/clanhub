import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='hero-container'>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to Homework Hub</h1>
                            <p className='subtitle'>Consolidate your knowledge by completing and submitting homework exercises.</p>
                        </div>
                        <div className='button-container'>
                            <a href='/login'>
                                <Button size='lg' className='landing-button'>Login</Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landing-button' variant='outline-primary'>Register</Button>
                            </a>
                        </div>
                    </div>

                    <div className='hero-illustration'>
                        
                        {/* <img src="../../background2.1.png" alt="" /> */}
                    </div>

                </div>
                
            </Row>
        </Container>    
    </div>
  )
}

export default LandingPage