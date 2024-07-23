import React from 'react'
import { NavLink } from 'react-router-dom'
import about from './aboutus.jpg'

export default function About(){
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4 text-center">About Us</h1>
                        <p className="lead mb-4">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        <p className="lead mb-4 text-danger">
                           Tejas Borude, CTO
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <img src="/assets/about.jpg" alt="About Us" height="400px" width="400px" /> */}
                        <img src={about} alt="about img" height="200px" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}