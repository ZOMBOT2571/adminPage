import React from 'react'

const Tables = React.lazy(() => import('./views/base/tables/Tables'));


const routes = [
  
  { path: '/base/tables', name: 'Tables', element: Tables },

]

export default routes
