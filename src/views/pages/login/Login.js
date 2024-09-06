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
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom';
import { AuthUser} from './../../../api/user';
import { useDispatch } from 'react-redux';
import {  setUserToken, } from './../../../action/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const msgInput = useRef(null);
  const passwordInput = useRef(null);
 
  
  
  const HandleSubmit = async () => {
    console.log("click")
    const login = {
      username: msgInput.current.value,
      password: passwordInput.current.value,
    }
  
    try {
      await AuthUser(login).then((response) =>{

        console.log(response.responseObject.token,)
        dispatch(setUserToken(response.responseObject.token));
      })
      navigate('/dashboard');
      
    } catch (error) {
      console.error("Authentication failed:", error);
      // Handle error appropriately, e.g., show an error message
    }
  };
  window.addEventListener('keydown', event => {
    if (event.code === 'Enter' && window.location.pathname === '/login') {
      document.getElementById('login-btn')?.click();
    }
  });
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} style={{}} >
            <CCardGroup style={{
              height:'350px',
              display:'flex',
              flexDirection:'row'
            }}>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className=''>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="Username"
                      ref={msgInput}
                      autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        < CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        ref={passwordInput}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol style={{ display:'flex',
                        justifyContent:'end'}}>
                        <CButton 
                        onClick={HandleSubmit} 
                        color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
