import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
const NewsLetter = ({ className = '' }) => {
    const [email, setEmail] = useState('')
    const submitHandler = event => {
        event.preventDefault()
        console.log('email =', email)
    }
    return (
        <Grid className={`newsLetterArea ${className}`}>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Grid className="newsletterWrap">
                        <h3>Subscribe  Newsletter</h3>
                        <form onSubmit={submitHandler}
                            className="newsletterForm">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Email Address..." />
                            <Button type="submit">subscribe</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default NewsLetter