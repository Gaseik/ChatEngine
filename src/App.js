import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'


const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID="dfd2db7f-3b22-4fbf-96fd-93b1469c2a32"
            userName="Gaseik2699"
            userSecret="123"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;