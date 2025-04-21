import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='bgColor mt-5'>
                    <div className='container d-flex flex-column'>
                        <div className='d-flex justify-content-center gap-2 gap-sm-5 my-sm-3 my-2'>
                            <Link to='#' className='text-capitalize text-light mx-2 mx-sm-0 text-decoration-none navlink1'>help center
                                <div className='line1'></div>
                            </Link>
                            <Link to='#' className='text-capitalize text-light mx-2 mx-sm-0 text-decoration-none navlink1'>support
                                <div className='line1'></div>
                            </Link>
                            <Link to='/about' className='text-capitalize text-light mx-2 mx-sm-0 text-decoration-none navlink1'>about us
                                <div className='line1'></div>
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p className='fs-6 text-light text-capitalize'>&#169; 2025 all rights reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
