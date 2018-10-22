import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lang: PropTypes.string,
  multi: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  renderAs: 'code',
  multi: false
}

export const Code = ({ children, ...props }) => {
  const {
    className,
    renderAs,
    multi,
    lang,

    ...attributes
  } = props

  const classNames = classnames(
    {
      code: multi
    },

    className
  )

  let Element = renderAs

  if (multi && Element === 'code') {
    Element = 'pre'
  }

  return multi ? (
    <Element {...attributes} className={classNames}>
      <code lang={lang}>{children}</code>
    </Element>
  ) : (
    <Element {...attributes} className={classNames} lang={lang}>
      {children}
    </Element>
  )
}

Code.propTypes = propTypes
Code.defaultProps = defaultProps

export default Code
