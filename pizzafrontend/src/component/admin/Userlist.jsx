import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { allUserData,deleteUser,makeAdminUser } from '../../actions/userAct'
import {Spinner,Alert,Table,Button} from 'react-bootstrap'

const Userlist = () => {
  const dispatch = useDispatch()
  const userstate = useSelector(state => state.allUserReducer)
  const {loading,users,error} = userstate
 useEffect(()=>{
dispatch(allUserData())
 },[dispatch])
  return (
    <div>
      <h3 className='text-center' >User list</h3>
      {loading && <Spinner/>}
      {error && <Alert variant='danger' >{error}</Alert>}
      <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>Sr. No.</th>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Action</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,i)=>(
          <tr key={user._id} className='text-center' >
            <td>{i+1}</td>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt.substring(0,10)}</td>
            <td>
            <Button variant='danger' 
            onClick={()=>{dispatch(deleteUser(user._id))}} >Delete User</Button>
            </td>
            <td>{user.isAdmin ? <h4 className='text-center' >YES</h4> :
             <Button onClick={()=>{dispatch(makeAdminUser(user._id))}} >Make Admin</Button>}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Userlist
