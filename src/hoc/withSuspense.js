import React from 'react'

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}> 
         <Component {...props} />
         </Suspense>
    }
}