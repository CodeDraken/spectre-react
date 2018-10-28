import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid, Image, Figure, Video } from '../src'

storiesOf('Media', module)
  .add('Image', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col all={4} offset='mx'>
          <strong>Default Image</strong>
          <br />
          <Image
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
          />
          <br />

          <strong>Responsive Image</strong>
          <br />
          <Image
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            responsive
          />
          <br />

          <strong>Contain Image</strong>
          <br />
          <Image
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            contain
          />
          <br />

          <strong>Cover Image</strong>
          <br />
          <Image
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            cover
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
  .add('Figure', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col all={5} offset='mx'>
          <strong>Default Figure</strong>
          <Figure>
            <Image src='https://source.unsplash.com/random'
              alt='random image'
              responsive
            />
            <Figure.Caption>Default Caption</Figure.Caption>
          </Figure>

          <strong>Align center</strong>
          <Figure>
            <Image src='https://source.unsplash.com/random'
              alt='random image'
              responsive
            />
            <Figure.Caption align='center'>Center Caption</Figure.Caption>
          </Figure>

          <strong>Align Right</strong>
          <Figure>
            <Image src='https://source.unsplash.com/random'
              alt='random image'
              responsive
            />
            <Figure.Caption align='right'>Right Caption</Figure.Caption>
          </Figure>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
  .add('Avatars', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col all={10} offset='mx'>
          <p><strong>Avatars</strong></p>

          <strong>Default: </strong>
          <Figure avatar>
            <Image
              src='https://picturepan2.github.io/spectre/img/avatar-1.png'
              alt='default avatar'
            />
          </Figure>
          <br />
          <hr />

          <strong>Sizes: xs, sm, lg, xl</strong>

          <br />

          <Figure avatar size='xs'>
            <Image
              src='https://picturepan2.github.io/spectre/img/avatar-1.png'
              alt='xs avatar'
            />
          </Figure>
          <Figure avatar size='sm'>
            <Image
              src='https://picturepan2.github.io/spectre/img/avatar-1.png'
              alt='sm avatar'
            />
          </Figure>
          <Figure avatar size='lg'>
            <Image
              src='https://picturepan2.github.io/spectre/img/avatar-1.png'
              alt='lg avatar'
            />
          </Figure>
          <Figure avatar size='xl'>
            <Image
              src='https://picturepan2.github.io/spectre/img/avatar-1.png'
              alt='xl avatar'
            />
          </Figure>

          <br />
          <hr />

          <p><strong>Initials</strong></p>
          <Figure avatar size='xl' initials='AB' />
          <Figure avatar size='xl' initials='CD' />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
  .add('Video', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col all={8} offset='mx'>
          <strong>Default Video</strong>
          <br />
          <Video
            src='https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm'
            controls
          >
            Your browser does not support HTML5 video
          </Video>
          <hr />

          <strong>Responsive or Ratio set to 16:9</strong>
          <Video
            src='https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm'
            controls
            responsive
          >
            Your browser does not support HTML5 video
          </Video>
          <hr />

          <strong>Ratio 4:3</strong>
          <Video
            src='https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm'
            controls
            ratio='4:3'
          >
            Your browser does not support HTML5 video
          </Video>

          <strong>Ratio 1:1</strong>
          <Video
            src='https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm'
            controls
            ratio='1:1'
          >
            Your browser does not support HTML5 video
          </Video>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
