import React, { useState, Fragment } from 'react'
import { InputAdornment, Grid, TextField, Button } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from "next/router";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const HeaderBottom = props => {
    const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    const router = useRouter();
    return (
        <Fragment>
            {trigger && <Grid className="backdrop" onClick={clickHandler} ></Grid>}
            <Grid className={props.className}>
                <Grid
                    container
                    alignItems="center"
                    className="container">
                    <Grid item md={3} sm={6} xs={8}>
                        <Grid className="logo">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo/logo.png" alt="logo" />
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item md={8} xs={12}
                        className={responsive ?
                            "responsiveWrapper active" :
                            "responsiveWrapper"}>
                        <ul className="mainMenuWrap">
                            <li><Link href='/'><a className={
                                router.pathname == "/" ||
                                    router.pathname == "/home-two" ? "active" : ""
                            }>Home <KeyboardArrowDownOutlinedIcon /></a></Link>
                                <ul className="subMenu">
                                    <li><Link href='/'><a className={router.pathname == "/" ? "active" : ""}>Home One</a></Link></li>
                                    <li><Link href='/home-two'><a className={router.pathname == "/home-two" ? "active" : ""}>Home Two</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href='/about'><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
                            <li><Link href='/practice'><a className={router.pathname == "/practice" || router.pathname == "/practice/[id]" ? "active" : ""}>Practice</a></Link></li>
                            <li><Link href='/case-stadies'><a className={router.pathname == "/case-stadies" || router.pathname == "/case-stadies/[id]" ? "active" : ""}>Cases</a></Link></li>
                            <li><Link href='/blog'><a className={router.pathname == "/blog" || router.pathname == "/blog/[id]" ? "active" : ""}>Blog</a></Link></li>
                            <li><Link href='/attorneys'><a className={router.pathname == "/attorneys" || router.pathname == "/attorneys/[id]" ? "active" : ""}>Attorneys</a></Link></li>
                            <li><Link href='/contact'><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
                        </ul>
                    </Grid>
                    <Grid item md={1} sm={6} xs={4}>
                        <Grid className="searchMenuWrapper">
                            <Grid className="searchWrap">
                                <SearchOutlinedIcon className="search" onClick={clickHandler} />
                                <Grid className={trigger ? 'searchform active' : 'searchform'}>
                                    <TextField
                                        placeholder="Search Here"
                                        value={search}
                                        type="text"
                                        variant="outlined"
                                        className="searchInput"
                                        onChange={event => setSearch(event.target.value)}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <Button><SearchOutlinedIcon /></Button>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid onClick={responsiveHandler} className="responsiveTrigger">
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default HeaderBottom