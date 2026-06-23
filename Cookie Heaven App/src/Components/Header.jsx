import './Header.css'
import { useTheme } from '../Context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <h1>Cookie Heaven</h1>
      <button type="button" onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  )
}

export default Header