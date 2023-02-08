import React from 'react'

const Newsletter = ({subscribe, status , message} ) => {
  return (
    <Col lg={12}>
    <div className='newsletter-bx'>
        <Row>
            <Col lg={12} md={6} xl={5}>
                <h3>Subscribe to my Newsletter</h3>
                {status === "sending" && <Alert>Sending...</Alert>}
                {status === "error" && <Alert variant="danger">{message}</Alert>}
                {status === "success" && <Alert>{message}</Alert>}
            </Col>
        </Row>
    </div>
    </Col>
  )
}

export default Newsletter