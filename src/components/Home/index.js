import './index.css'
import Header from '../Header'

import RenderPage from '../RenderPage'

const Home = () => (
  <>
    <Header />
    <div className="menu-category-container">
      <RenderPage />
    </div>
  </>
)

export default Home
