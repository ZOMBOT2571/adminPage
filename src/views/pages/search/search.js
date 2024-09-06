import React, { useEffect, useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilSearch, cilUser } from '@coreui/icons'


const Search = () => {

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} style={{}} >
            <CCardGroup style={{
              height:'800px',
              display:'flex',
              flexDirection:'row'
            }}>
              <CCard 
              style={{
                borderRadius:'20px'
              }}
              className="p-4">
                <CCardBody>
                <CInputGroup style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                }} className="mb-3">
                    <CFormInput style={{
                        borderRadius:'10px'
                    }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    <CIcon style={{
                        marginLeft:'20px',
                    }} icon={cilSearch}
                    size="xl" />
                </CInputGroup>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Search