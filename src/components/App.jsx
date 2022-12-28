import { Navigation } from '@/pages/Navigation'
import { BrowserRouter } from 'react-router-dom'
/**
 * main router  to the app
 * @component
 * @returns  {React.ReactElement}
 */
export function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </div>
    )
}
