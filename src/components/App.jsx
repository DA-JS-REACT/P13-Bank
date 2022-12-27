import '@/styles/Layout/App.scss'

import Routage from '@/pages/Routage'
import { BrowserRouter } from 'react-router-dom'
/**
 * main router  to the app
 * @component
 * @returns  {React.ReactElement}
 */
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routage />
            </BrowserRouter>
        </div>
    )
}

export default App
