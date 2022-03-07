import React from 'react'

export default function Control({renderControl, node, name, controlDefaults}) {
  return (
    <>{renderControl(node,name,controlDefaults)}</>
  )
}

