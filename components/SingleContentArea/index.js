import React from 'react'
import { Grid } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
const SingleContentArea = ({ className = "", avatar, service }) => {
    return (
        <Grid className={`singleContentArea ${className}`}>
            <Grid className="singleContentImg">
                <img src={service.image} alt={service.title} />
            </Grid>
            <Grid className="singleContentWrap">
                <h3>{service.title}</h3>
                <h5>{service.content}</h5>
                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,</p>
                <p>because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
                {avatar && (
                    <Grid className="avatarWra">
                        <Grid container spacing={4}>
                            <Grid item sm={4} xs={12}>
                                <img src={service.avatarImg} alt={service.subtitle} />
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <h4>{service.subtitle}</h4>
                                <ul>
                                    {service.featured.map(list => (
                                        <li key={list}><CheckIcon /> {list}</li>
                                    ))}

                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
export default SingleContentArea