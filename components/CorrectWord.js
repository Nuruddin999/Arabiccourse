import React, { useEffect } from "react"
import { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import styles from "../pages/urok2/styles.module.css"
import { mergeClasses } from "@material-ui/styles";
import { itemStyles } from "./styles";
import CheckIcon from "./CheckIcon";
import WrongIcon from "./WrongIcon";
const CorrectWord = ({ words, textChange, variants, isChecked }) => {

    const classes = itemStyles()
    return <React.Fragment>
        {words.map((word, index) => <Grid container justify={"center"} alignItems={"center"}>
            {isChecked ? word.right === variants[index] ? <Grid item xs={1} sm={1}>
                <CheckIcon />
            </Grid> : <Grid item xs={1} sm={1}>
                    <WrongIcon />
                </Grid> : null}
            <Grid container item xs={9} sm={9} className={classes.root} direction={"column"} alignItems={"center"}>
                <Grid item >
                    <Typography align="center" variant="h4" color="initial">{word.word}</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md lg xl>
                    <TextField

                        value={variants[index]}
                        onChange={(e) => textChange(e, index)}
                        InputProps={{ style: { fontSize: 40 } }}
                    />
                </Grid>
            </Grid>

        </Grid>)}
    </React.Fragment>
}
export default CorrectWord