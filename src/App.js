import React from 'react'
import {Grid} from '@material-ui/core'
import Details from './components/Details/Details'
import Main from './components/main/Main'

import makeStyles from './Styles'

const App = () => {
    const classes = makeStyles();
    
  return (
    <div >
        <Grid className={classes.scroll} container spacing={2} alignItems="center" justify="center" style={{height:'100vh'}}>
            <Grid item xs={12} sm={4} className={classes.mobile} >
                <Details title='Income'/>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main} >
                <Main/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.desktop} >
                <Details title='Income'/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last} >
                <Details title='Expense'/>
            </Grid>
        </Grid>
    </div>
  )
}

export default App