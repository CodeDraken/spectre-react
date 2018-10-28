import React from 'react'

import Figure from '../Media/Figure'
import AvatarStatus from './AvatarStatus'

const Avatar = (props) => (<Figure {...props} avatar />)

Avatar.Status = AvatarStatus

export default Avatar
