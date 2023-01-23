
import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ProgressBar2 } from '../components/MisPracticas/ProgressBar2'
import { ShowHiddeMessage } from '../components/ShowHideMessage'
import { StopWatchTimer } from '../components/StopWatchTime'

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
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopWatchTime",
      element: <StopWatchTimer />,
    },
    {
      path: "/misPracticas/showHideMessage2",
      element: <ShowHiddeMessage />,
    },
    {
      path: "/misPracticas/progressBar2",
      element: <ProgressBar2 />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]