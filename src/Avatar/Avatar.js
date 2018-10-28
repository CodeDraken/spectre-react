import React from 'react'

import Figure from './Media/Figure'
import AvatarPresence from './AvatarPresence'

const Avatar = (props) => (<Figure {...props} avatar />)

Avatar.Status = AvatarPresence

export default Avatar
