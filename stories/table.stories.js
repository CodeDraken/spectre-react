import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Table } from '../src'

storiesOf('Table', module)
  .add('Default', () => (
    <Table
      striped={boolean('Striped', false)}
      hover={boolean('hover', false)}
      scroll={boolean('scroll', false)}
    >
      <thead>
        <tr>
          <th>name</th>
          <th>genre</th>
          <th>release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
      </tbody>
    </Table>
  ))
