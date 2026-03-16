import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { SiteLayout } from './layout/SiteLayout'
import { AboutPage, ContactPage, HomePage, NotFoundPage, PortfolioPage, ServicesPage } from './pages'

function App() {
  const { theme, toggleTheme } = useTheme()

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'contato@lealsystems.com.br'
  const rawAppUrl = import.meta.env.VITE_APP_URL?.trim() || 'https://lealsystems.com.br'
  const appUrl = rawAppUrl.startsWith('http://') || rawAppUrl.startsWith('https://') ? rawAppUrl : `https://${rawAppUrl}`

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<SiteLayout contactEmail={contactEmail} appUrl={appUrl} theme={theme} onToggleTheme={toggleTheme} />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contato" element={<ContactPage contactEmail={contactEmail} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
