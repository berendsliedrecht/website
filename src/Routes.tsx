import { HashRouter, Routes as ReactRoutes, Route } from 'react-router'

import { About } from './pages/About'
import { Home } from './pages/Home'

export const Routes = () => (
  <HashRouter>
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </ReactRoutes>
  </HashRouter>
)
