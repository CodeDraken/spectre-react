import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { Heading } from '../'

describe('Heading', () => {
  describe('Snapshots', () => {
    it('Should exist', () => {
      expect(Heading).toMatchSnapshot()
    })
  })
})
