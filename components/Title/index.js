import React from "react";
import { Grid } from '@material-ui/core'
const SectionTitle = ({ subTitle, title, className = "" }) => {
    return (
        <Grid className={`sectionTitle ${className}`}>
            <span>{subTitle}</span>
            <h2>{title}</h2>
        </Grid>
    )
}
export default SectionTitle