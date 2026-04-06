import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Contact } from './pages/Contact'
import { EPK } from './pages/EPK'
import { Events } from './pages/Events'
import { Home } from './pages/Home'
import { Media } from './pages/Media'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/epk" element={<EPK />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
