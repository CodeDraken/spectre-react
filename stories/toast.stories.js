import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Col, Row, Toast } from '../src'

storiesOf('Toasts', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={3}>
          <Toast className="m-2">
            <button className="btn btn-clear float-right" />
            <h5>Toast Title</h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Toast>

          <Toast className="m-2">
            <button className="btn btn-clear float-right" />
            Default Toast
          </Toast>
        </Col>
      </Row>
    </Container>
  ))
  .add('Colors', () => (
    <Container>
      <Row>
        <Col all={3}>
          <Toast className="m-2" color="primary">
            <button className="btn btn-clear float-right" />
            Toast - primary
          </Toast>
          <Toast className="m-2" color="secondary">
            <button className="btn btn-clear float-right" />
            Toast - secondary
          </Toast>
          <Toast className="m-2" color="error">
            <button className="btn btn-clear float-right" />
            Toast - error
          </Toast>
          <Toast className="m-2" color="warning">
            <button className="btn btn-clear float-right" />
            Toast - warning
          </Toast>
          <Toast className="m-2" color="success">
            <button className="btn btn-clear float-right" />
            Toast - success
          </Toast>
        </Col>
      </Row>
    </Container>
  ))
