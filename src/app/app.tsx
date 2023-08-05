import "./styles/index.scss";

import ReactDOM from 'react-dom/client'

import { withProvider } from './providers'
import { Routing } from "./routing";

const App = withProvider(() => {
    return (
        <div className="app">
            <Routing />
        </div>
    )
})

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
    <App />
    ,
)
