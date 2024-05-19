"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <img
              src="/assets/Logo.png"
              alt="Creative Logo"
              style={{ height: '36px', width: 'auto' }}
            />
              </h6>
              <p>
              <b>CreativeWorks</b> is a private network that has unique sets of people with creative minds
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Downloads
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Location
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Server
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contries
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Engage</h6>
              <p>
                <a href='#!' className='text-reset'>
                CreativeWorks?
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Tutorials
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Terms of Service
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Earn Money</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Affilate
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                Become Partner
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
  );
}