import React, { type PropsWithChildren } from 'react'

const layout = ({children}: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        header
        <main>
            <div>{children}</div>
        </main>
        footer
    </div>
  )
}

export default layout