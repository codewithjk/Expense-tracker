import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core'

import makeStyles from './Styles'
import Form from './form/Form';
import List from './list/List';
import { expenseTrackerContext } from '../../contaxt/contaxt';

const Main = () => {
    const classes=makeStyles();
    const {balance} = useContext(expenseTrackerContext)

  return (
    <Card className={classes.root}>
        <CardHeader title="Expence Tracker" subheader='Powered by EMS' />
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
            
            <Divider/>
                <Form/>
        </CardContent>
        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main