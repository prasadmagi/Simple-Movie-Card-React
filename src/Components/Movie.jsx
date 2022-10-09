import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Moviedetalil from './Moviedetalil';
const Movie = ({ data }) => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Col key={data.id}>
                <Card className="shadow p-1 m-2 rounded" style={{ height: "90vh" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} style={{ height: "55vh" }} rounded />
                    <Card.Body>
                        <Card.Title className="text-primary"><span>Title - </span>{data.title}</Card.Title>
                        <Card.Text className='text-secondary'><span>Release date - </span>{data.release_date}</Card.Text>
                        <Card.Text className="text-info"><span>Rating - </span>{data.vote_average}</Card.Text>
                        <Button onClick={() => setModalShow(true)} variant="primary">More</Button>

                    </Card.Body>
                </Card>
            </Col>
            <Moviedetalil
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
                    />
    </div>
    )
}

export default Movie
