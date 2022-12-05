import { useEffect, useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { editUser, getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div {
  margin-top:20px
}
`
const defaultValue = {
    id: "",
    name: "",
    email: "",
    password: ""
}

const EditUser = () => {
    const [user, setUser] = useState(defaultValue)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        loadUserDetails()
    },[])

    const loadUserDetails = async () => {
        const response = await getUser(id)
        setUser(response.data)

    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const editUserDetails = () => {
        editUser(user,id)
        navigate('/all')
    }
   
    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>ID</ InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id' value={user.id} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</ InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</ InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email'value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Password</ InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={user.password}/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser