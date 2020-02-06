import React from 'react'
import createReactContext from 'create-react-context'

const context = createReactContext()

// eslint-disable-next-line
const Provider = context.Provider

export const consumer = Origin => props => (
  <context.Consumer>
    {value => {
      // eslint-disable-next-line react/prop-types
      const container = props.container || value
      return <Origin {...props} container={container} />
    }}
  </context.Consumer>
)

export default Provider
