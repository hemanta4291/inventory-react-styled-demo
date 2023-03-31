import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BaseHeaderTitle from '../components/BaseHeaderTitle'
import { DataTableCommonDesign } from '../components/styled/DataTable.styled';
import { UserInfoWrapper, UserWraper } from '../components/styled/User.styled'
import GlobalModal from '../components/GlobalModal';
import TextField from '../components/TextField';


const User = () => {

  const [modalOpen,setModalOpen] = useState(false)
  const [userName,setUserName] = useState('')
  const [userEmail,setUserEmail] = useState('')

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1  //RDT provides index by default
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      cell: row => (
        <div className='data__table__action'>
          <button className='view__btn'><FontAwesomeIcon icon="fa-solid fa-eye" /></button>
          <button className='edit__btn'><FontAwesomeIcon icon="fa-solid fa-edit" /></button>
          <button className='delete__btn'><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
        </div>
      )
    }
  ];

  const data = [
    
    {
      id: 1,
      name: 'Beetlejuice',
      email: 'devid@gmail.com',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 3,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 4,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 5,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 6,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 7,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 8,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 9,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 10,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 11,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
    {
      id: 12,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
    },
  ]

  const createUserHandler = () =>{
    setModalOpen(true)
  }

  const handleclose = () =>{
    setModalOpen(false)
  }

  const handleSubmit = () => {
    console.log({userName,userEmail})
    //if condition{}
    setModalOpen(false)
    setUserName('')
    setUserEmail('')
  }

  // console.log(userName)
  return (
    <div>
      <BaseHeaderTitle 
        btnText="Add User"
        title="User List" 
        subTitle="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        handleClick ={createUserHandler} 
       />
      <UserWraper>
        <div className='user__list'>
          <DataTableCommonDesign>
            <div className='datatable__header'>
              <h4 className='datatable__title'>List</h4>
                <input className='datatable__search' placeholder='search'/>
            </div>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
          </DataTableCommonDesign>
          
        </div>
        <div className='user__details'>
            <h4 className='user__title'>User Information</h4>
            <UserInfoWrapper>
               <div className='user__info'>
                  <div className='user__info__left'>Id</div>
                  <div className='user__info__right'>1</div>
               </div>
               <div className='user__info'>
                  <div className='user__info__left'>Name</div>
                  <div className='user__info__right'>Devid Akond</div>
               </div>
               <div className='user__info'>
                  <div className='user__info__left'>Email</div>
                  <div className='user__info__right'>Devid.Akond@gmail.com</div>
               </div>
            </UserInfoWrapper>
        </div>
      </UserWraper>

    {
      modalOpen && 
      <GlobalModal submit={handleSubmit} btnText="Create" handleclose={handleclose} open={modalOpen}>
        <TextField onChange={(e)=>setUserName(e.target.value)} label="User" type="text" placeholder="Enter Name" name="userName" value={userName}/>
        <TextField onChange={(e)=>setUserEmail(e.target.value)} label="Email" type="email" placeholder="Enter Email" name="userEmail" value={userEmail}/>
      </GlobalModal>

    }
      
    </div>
  )
}

export default User