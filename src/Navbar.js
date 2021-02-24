import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { MovieContext } from './MovieContext'


const Nav = ({ history }) => {
    const [show, setShow] = useState()
    // const [search, setSearch] = useState()

    const { search, setSearch, handleSearch, setShowRandom } = useContext(MovieContext)


    // console.log("To jest wynik wyszukiwania:-------", search)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setShow(true)
            } else setShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, []);

    const goToHomePage = () => {
        setShowRandom("RandomMovies")
        history.push('/')
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light nav ${show && "nav_black"}  `}>
                <a className="navbar-brand" href="#">

                    <img
                        // className="nav_logoLeft"
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt=" Movie DataBase Logo"
                        onClick={goToHomePage}
                        style={{ width: '54px', marginLeft: '30px' }}
                    />
                </a>
                <button className={`navbar-toggler ${show && " nav_white"} `} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active ml-4 h4">
                            <Link to='/favourites'>
                                <div className={`myFavourite ${show && "myFavourite_white"}`}
                                   
                                >My Favourites Movies</div>
                            </Link>
                        </li>


                    </ul>
                    <form className="nav_form" onSubmit={handleSearch} >
                        <div className="input-group">
                            <>
                                <input
                                    type="text"
                                    placeholder="  Search a movie by title"
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
                </div>
            </nav>



            {/* <nav className={`navbar navbar-expand-lg nav ${show && "nav_black"} `}>


                <img
                    // className="nav_logoLeft"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                    alt=" Movie DataBase Logo"
                    onClick={goToHomePage}
                    style={{ width: '54px', marginLeft: '30px' }}
                />


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ml-4 h4">
                            <Link to='/favourites'>
                                <div
                                    style={{ color: '#222', marginLeft: '60px' }}
                                >My Favourites Movies</div>
                            </Link>
                        </li>

                    </ul>




                    <form className="nav_form" onSubmit={handleSearch} >
                        <div className="input-group">
                            <>
                                <input
                                    type="text"
                                    placeholder="  Search a movie by title"
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
                </div>
            </nav> */}


        </>
    )
}

export default Nav
