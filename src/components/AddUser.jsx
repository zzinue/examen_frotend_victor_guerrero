import { useEffect, useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import axios from 'axios'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div {
  margin-top:20px
}
`
const defaultValue={
  id: "",
  name: "",
  email: "",
  password: ""
}

// const fetchData=async()=>{
// const {data}= await axios.get('/api/notes')
// console.log({data});
// }


const AddUser = () => {
  const [user, setUser] = useState(defaultValue)

  const navigate=useNavigate()
  
  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const addUserDetails=()=>{
    addUser(user)
    navigate('/all')
  }
  // useEffect(() => {
  //  fetchData()
  // }, [])
  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>ID</ InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='id' />
      </FormControl>
      <FormControl>
        <InputLabel>Name</ InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' />
      </FormControl>
      <FormControl>
        <InputLabel>Email</ InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' />
      </FormControl>
      <FormControl>
        <InputLabel>Password</ InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='password' />
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
      </FormControl>

    </Container>
  )
}

export default AddUser