import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHiddeMessage } from '../components/ShowHideMessage'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHiddeMessage />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]