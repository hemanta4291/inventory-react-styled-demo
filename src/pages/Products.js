import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import BaseHeaderTitle from '../components/BaseHeaderTitle'
import GlobalModal from '../components/GlobalModal';
import SelectGlobal from '../components/SelectGlobal';
import { DataTableCommonDesign } from '../components/styled/DataTable.styled';
import { ProductWrapper } from '../components/styled/Product.styled';
import TextField from '../components/TextField';

const Products = () => {
  const [modalOpen,setModalOpen] = useState(false)
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [quantity,setQuantity] = useState('')
  const [selectCategory,setSelectCategory] = useState("Computer")
  const [selectBrand,setSelectBrand] = useState("HP")
  const [categories,setCategories] = useState([
    {
      id:1,
      title:"Computer",
    },
    {
      id:2,
      title:"Laptop",
    },
    {
      id:3,
      title:"Moble",
    },
    {
      id:4,
      title:"Food",
    },
  ])

  const [brands,setBrands] = useState([
    {
      id:1,
      title:"HP",
    },
    {
      id:2,
      title:"Lenevo",
    },
    {
      id:3,
      title:"Del",
    },
    {
      id:4,
      title:"Samsung",
    },
  ])

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1  //RDT provides index by default
    },
    {
      name: 'Product Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Brand',
      selector: row => row.brand,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Quentity',
      selector: row => row.quentity,
      sortable: true,
    },
    {
      name:"Action",
      cell: row => (
        <div className='data__table__action'>
          <button onClick={(e)=>handleViewRowData(e,row)} className='view__btn'><FontAwesomeIcon icon="fa-solid fa-eye" /></button>
          <button onClick={(e)=>handleEditRowData(e,row)} className='edit__btn'><FontAwesomeIcon icon="fa-solid fa-edit" /></button>
          <button onClick={(e)=>handleDeleteRowData(e,row)} className='delete__btn'><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
        </div>
      )
    }
  ];

  const data = [
    
    {
      id: 1,
      name: 'Beetlejuice',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 2,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Lenevo',
      quentity:420,
      price:55000
    },
    {
      id: 3,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Elitebook',
      quentity:520,
      price:55000
    },
    {
      id: 4,
      name: 'Ghostbusters',
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Elitebook',
      quentity:520,
      price:55000
    },
    {
      id: 5,
      name: 'Ghostbusters',
      email: 'jon@gmail.com',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 6,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 7,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 8,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Lenevo',
      quentity:520,
      price:55000
    },
    {
      id: 9,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 10,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Del',
      quentity:520,
      price:55000
    },
    {
      id: 11,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'HP',
      quentity:520,
      price:55000
    },
    {
      id: 12,
      name: 'Ghostbusters',
      category: 'Computer',
      brand:'Del',
      quentity:520,
      price:55000
    },
  ]

  const createProductHandler = () =>{
    setModalOpen(true)
  }

  const handleclose = () =>{
    setModalOpen(false)
  }

  const handleSubmit = () => {
    console.log({name,quantity,price,selectCategory,selectBrand})
    //if condition{}
    setModalOpen(false)
    setName('')
    setQuantity('')
    setPrice('')
  }


  const handleSelectCategory = (e) =>{
    setSelectCategory(e.target.value)
  }

  const handleSelectBrand = (e) =>{
    setSelectBrand(e.target.value)
  }

  const handleViewRowData = (e,rowData) =>{
    console.log(rowData)
  }
  const handleEditRowData = (e,rowData) =>{
    console.log(rowData)
  }
  const handleDeleteRowData = (e,rowData) =>{
    console.log(rowData)
  }

  return (
    <ProductWrapper>
       <BaseHeaderTitle 
       btnText="Add Product"
       title="Product List" 
       subTitle="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
       handleClick={createProductHandler}
        />

        <div className='product__content'>
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

        {
          modalOpen && 
          <GlobalModal submit={handleSubmit} btnText="Create" handleclose={handleclose} open={modalOpen}>
            <TextField onChange={(e)=>setName(e.target.value)} label="Name" type="text" placeholder="Enter Name" name="userName" value={name}/>
            <SelectGlobal value={selectCategory} label="Category" options={categories} onChange={handleSelectCategory}/>
            <SelectGlobal value={selectBrand} label="Brand" options={brands} onChange={handleSelectBrand}/>
            <TextField onChange={(e)=>setPrice(e.target.value)} label="Price" type="number" placeholder="Enter Price" name="ProductPrice" value={price}/>
            <TextField onChange={(e)=>setQuantity(e.target.value)} label="Quantity" type="number" placeholder="Enter Price" name="ProductQuantity" value={quantity}/>
          </GlobalModal>

        }
    </ProductWrapper>
  )
}

export default Products