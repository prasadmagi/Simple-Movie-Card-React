import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import ReactLoading from 'react-loading';
import '../App.css'
import { Link } from 'react-router-dom';
import Movie from './Movie';
const Main = () => {
    const [list, setlist] = useState([]);
    const [text, settext] = useState("")
    const [page, setpage] = useState(1);


    useEffect(() => {
        const url = `https://movie-task.vercel.app/api/popular?page=${page}`
        axios.get(url)
            .then(res => {

                setlist(res.data.data.results);

                // console.log(res.data.data.results);
            })
    }, [page])

    const handleprev = () => {
        if (page > 0) {
            setpage(page - 1)
        } else if (page === 0) {

        }
    }
    const handlenext = () => {
        setpage(page + 1);
    }

    return (
        <>

            <Navbar className="justify-content-center">
                <Form className="d-flex  ">
                    <Form.Control
                        type="search"
                        value={text}
                        placeholder="Enter title here"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => settext(e.target.value)}
                    />
                </Form>
                
            </Navbar>

            <Row xs={2} md={4} className="g-1 m-1">

                {
                    list.length > 0 ? list.filter((data) => {
                        if (text === "") {
                            return data;
                        }
                        else if (data.title.toLowerCase().includes(text.toLowerCase())) {
                            return data;
                        } else {

                        }
                    }).map((data) => (
                        <>
                            <Movie data={data} />

                        </>
                    )) : <div className='loading'>
                        <ReactLoading type="spin" color='#757575' />
                    </div>

                }
            </Row>
            <div className='text-center' style={{ margin: "1%" }} >
                {

                    list.length > 0 ? (<div className='gap-2'>
                        <Button onClick={() => handleprev()} >Prev</Button><span className='mx-2'>{page}</span>
                        <Button onClick={() => handlenext()}>Next</Button>

                    </div>) : null


                }
            </div>



        </>


    )

}
export default Main;
