import { makeStyles } from '@material-ui/core/styles';
import Image from "../src/assets/money.jpg"

export default makeStyles((theme) => ({
  desktop: {
    margin:'10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',paddingLeft: '5%'
    },
  },
  mobile: {
    
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      
    },
  },
  main: {
    margin:'10px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    margin:'10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  background:{
    [theme.breakpoints.down('sm')]: {
      
      backgroundImage:  `url(${Image})`
    },
  },
  scroll:{
    overflowY:'scroll',
  }
}));

