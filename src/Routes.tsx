import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router'

import { About } from './pages/About'
import { Home } from './pages/Home'

export const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </ReactRoutes>
  </BrowserRouter>
)
