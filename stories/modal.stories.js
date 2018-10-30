import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Modal, Grid, Button } from '../src'

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
              <Modal.Container>

                <Modal.Header>
                  <Modal.Header.Title>Modal Title</Modal.Header.Title>
                </Modal.Header>

                <Modal.Body>
                  <Grid.Container>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi incidunt odit non ea. Porro, ut inventore autem sint, vero omnis id ab neque voluptate unde distinctio quasi corrupti possimus.</p>
                  </Grid.Container>
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
        <p className='m-2'>Toggle a modal by setting the active prop to true or false</p>
        <Grid.Row>
          <Grid.Col all={10}>

            <ModalWrapper />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    )
  })
