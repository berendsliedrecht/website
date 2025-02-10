import { BrowserRouter, Routes as RRRoutes, Route } from 'react-router'
import { Home } from './Home'

export const Routes = () => (
  <BrowserRouter>
    <RRRoutes>
      <Route path="/" element={<Home />} />
    </RRRoutes>
  </BrowserRouter>
)
