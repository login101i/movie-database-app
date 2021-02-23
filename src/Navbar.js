import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Nav = () => {
    const [show, setShow] = useState()
    const [search, setSearch] = useState()

    console.log("To jest wynik wyszukiwania:-------", search)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setShow(true)
            } else setShow(false);
            console.log("przesuwam........")
        });
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, []);

    const handleSearch = () => {
        console.log("szukam")
    }

    return (
        <div className={`nav ${show && "nav_black"}`}>

            <Link to='/'>
                <img
                    className="nav_logoLeft"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                    alt=" Movie DataBase Logo"
                />
            </Link>
            <form className="nav_form" onSubmit={handleSearch} >
                <div className="input-group">

                    <>
                        <input
                            type="text"
                            placeholder="Search movies here"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ minWidth: '300px' }}
                        />
                        <div className="input-group-append" style={{ background: 'white', borderRadius: '3px' }}>
                            <button id="search_btn" className="btn">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </>

                </div>

            </form>
            <Link to='/favourites'>
                <div
                    className="nav_logoRight"
                >My Favourites Movies</div>
            </Link>

        </div >
    )
}

export default Nav
