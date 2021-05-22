import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Hieuxc &copy;</span>
      </div>
      <div className="mfs-auto">
        <a href="https://hieuxc.github.io/" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
