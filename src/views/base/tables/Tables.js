import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CFormCheck,
  CButton,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilColorBorder, cilDelete, cilSearch, cilX } from '@coreui/icons'
import { getBoard } from '../../../api/board'
import queryString from 'query-string';


const Table = () => {
  const initialQuery = {
    master_id:1,
    page:0,
    limit:10,
    // searchWord:''
  }
  const [ query , setQuery ] = useState(initialQuery)
  const [ tableData , setTableData ] = useState([])


  const getTableInfo = async () =>{
    try{
      const qrString = queryString.stringify(query)
      const data = await getBoard(`${qrString}`)
      console.log(data)
      setTableData(data.responseObject.data)

      
    }catch(error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    getTableInfo()
  },[])
  
  useEffect(()=>{
    if(tableData.length > 0){
      tableData.map((item, index) =>{
        console.log('data',item.title)
      })
    }
  },[tableData])

  return (
    <div className="bg-body-tertiary  d-flex flex-row align-items-center">
      <CContainer fluid>
            <CCardGroup style={{
              display:'flex',
              flexDirection:'column'
            }}>
              <CCard 
              style={{
                borderRadius:'20px',
                marginBottom:'20px',
                width:"100%"
              }}
              className="p-4">
                <CCardBody style={{
                  padding:"0",
                  display:"flex",
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                <div
                style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  width:"400px"
                }}
                >
                  <CFormLabel
                  style={{
                    fontSize:"18px",
                    marginTop:"7px"
                  }}
                  >
                    Search
                  </CFormLabel>
                  <div 
                  style={{
                    marginLeft:'10px',
                    
                  }}
                  class="input-group mb-3">
                    <input type="text" class="form-control"aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button style={{
                      
                    }}   class=" btn btn-primary" type="button" id="button-addon2">
                      <CIcon
                      icon={cilSearch}
                      />
                    </button>
                  </div>
                </div> 
                <CButton style={{ marginRight:'10px',
                  height:'45px'
                }}  color="primary">Create</CButton>

                </CCardBody>
              </CCard>
              
              <CCard style={{
                borderRadius:'20px'
              }}>
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell style={{
                      width:'40px'
                    }} scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                      <CTableHeaderCell style={{
                        width:'100px'
                      }} scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    { tableData?.map((item, index) =>{
                      return (
                        <CTableRow key={`data-${index}`}>
                        <CTableHeaderCell scope="row"><CFormCheck id="flexCheckDefault"/></CTableHeaderCell>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>{item.title}</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>
                          <CButton style={{ marginRight:'10px'}} size="sm" color="primary">
                            <CIcon 
                              icon={cilColorBorder}
                            />
                          </CButton>
                          <CButton  size="sm" color="danger" variant="outline">
                            <CIcon 
                              icon={cilX}
                            />
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                      )
                      })
                    }
                  </CTableBody>
                </CTable>
                </CCardBody>
              </CCard>
            </CCardGroup>
            { tableData?.map((item, index) =>{
              return (
                <p>{item.title}</p>
              )
            })}
      </CContainer>
    </div>
  )
}

export default Table