import React,{useState,useContext} from 'react'
import {TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import{v4 as uuidv4 } from 'uuid'

import formatDate from '../../../util/formatDate'
import makeStyles from './Styles'
import { expenseTrackerContext } from '../../../contaxt/contaxt'
import {expenseCategories,incomeCategories} from '../../../constants/categories'
import CustomSnackbar from '../../Snackbar/Snackbar'

const initialState={
    amount:"",
    category:'',
    type:'Income',
    date:formatDate(new Date()),
}

const Form = () => {
    const classes=makeStyles();
    const [formData, setFormData] = useState(initialState)
    const {addTransaction }= useContext(expenseTrackerContext);
    const [open,setOpen] = useState(false)

    const createTransaction = ()=>{
        const transaction = { ...formData,amount:Number(formData.amount),id:uuidv4()}
        setOpen(true)
        addTransaction(transaction)
        setFormData(initialState)
        
    }

    const selectedCategories = formData.type==='Income'? incomeCategories:expenseCategories

  return (
    <Grid container spacing={2}>
        <CustomSnackbar open={open} setOpen={setOpen}/>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
                ...
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e)=>setFormData({ ...formData, type: e.target.value})}>
                    <MenuItem value='Income'>Income</MenuItem>
                    <MenuItem value='Expense'>Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>category</InputLabel>
                <Select value={formData.category} onChange={(e)=>setFormData({ ...formData, category: e.target.value})}>
                    {selectedCategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type='number' label='Amount' fullwidth value={formData.amount} onChange={(e)=>setFormData( {...formData, amount:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
            <TextField type='date' label='Date' fullwidth value={formData.date} onChange={(e)=> setFormData({ ...formData, date:formatDate(e.target.value)})} />
        </Grid>
        <Button className={classes.button} variant='outlined' color="primary" fullwidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form