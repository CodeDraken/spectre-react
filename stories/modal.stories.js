import React from 'react'
import { storiesOf } from '@storybook/react'

import { Modal, Grid, Button, ModalTitle } from '../src'

storiesOf('Modal', module)
  .add('Default', () => {
    class ModalWrapper extends React.Component {
      state = {
        active: false
      }

      handleToggle = () => {
        this.setState((prevState) => ({
          active: !prevState.active
        }))
      }

      render () {
        return (
          <React.Fragment>
            <Button onClick={this.handleToggle}>
                Toggle Active
            </Button>

            <Modal active={this.state.active}>
              <Modal.Overlay onClick={this.handleToggle} />
              <Modal.Container>

                <Modal.Header>
                  <ModalTitle className='h5'>Modal Title</ModalTitle>
                </Modal.Header>

                <Modal.Body>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi incidunt odit non ea. Porro, ut inventore autem sint, vero omnis id ab neque voluptate unde distinctio quasi corrupti possimus.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button primary>Share</Button>
                  <Button link onClick={this.handleToggle}>Close</Button>
                </Modal.Footer>
              </Modal.Container>
            </Modal>
          </React.Fragment>
        )
      }
    }

    return (
      <Grid.Container>
        <p className='m-2'>Toggle a modal by setting the active prop to true or false. You can add the ModalOverlay component to handle clicking off the modal.</p>
        <Grid.Row>
          <Grid.Col all={10}>

            <ModalWrapper />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    )
  })
