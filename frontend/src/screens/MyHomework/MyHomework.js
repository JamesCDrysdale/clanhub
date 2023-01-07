import React from 'react'
import MainScreen from '../../components/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Badge, Button, Card } from 'react-bootstrap';
import './MyHomework.css';
import homework, {  } from "../../data/homework";

const MyHomework = () => {

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this submission?")) {

        }
    };

  return (
    <MainScreen title='Welcome back James Drysdale...'>
        <Link to='createhomework'>
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg" >
                New Homework Submission
            </Button>
            {
                homework.map(homework => (
                    <Card style={{ margin: 10 }}>
                        <Card.Header style={{ display: "flex" }}>
                            <span>{homework.timestamp}</span>
                            <span>{homework.studentName}</span>
                            <div>
                                <Button href={`/note/${homework._id}`} >Edit</Button>
                                <Button 
                                    variant='danger' 
                                    className='mx-2' 
                                    onClick={() => deleteHandler(homework._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h4>
                                <Badge bg='success'>
                                    Category - {homework.category}
                                </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                                <ul>
                                    <li>
                                        <strong>URL of GitHub Repo:</strong> {homework.urlOfGithubRepo}
                                    </li>
                                    <li>
                                        <strong>How Challenging was this homework?</strong> {homework.howChallenging}
                                    </li>
                                    <li>
                                        <strong>How far did you get with this homework?</strong> {homework.howFar}
                                    </li>
                                    <li>
                                        <strong>How are you feeling at this stage in the course?</strong> {homework.howAreYou}
                                    </li>
                                    <li>
                                        <strong>What would you like to recap?</strong> {homework.whatToRecap}
                                    </li>
                                    <li>
                                        <strong>Any other comments?</strong> {homework.comments}
                                    </li>
                                </ul>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                ))
            }
            
        </Link>
    </MainScreen>
  )
}

export default MyHomework