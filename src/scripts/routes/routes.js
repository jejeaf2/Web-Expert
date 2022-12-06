import Detail from '../views/pages/detailPage'
import Favorite from '../views/pages/favoritePage'
import Home from '../views/pages/HomePage'

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
