import React from 'react'
import { Container } from 'react-bootstrap'

function Error() {
  return (
        <Container style={{paddingTop:"150px"}} className='pb-5 px-5'>
            <h2 className='text-center fs-1'><span style={{fontSize:"60px"}}>404</span> <br/> Page Not Found</h2>
        </Container>
  )
}

export default Error