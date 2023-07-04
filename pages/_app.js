import '@/styles/globals.css'

import { UserProvider } from '@/context/authContext';
import { ChatContextProvider } from '@/context/ChatContext';


export default function App({ Component, pageProps }) {
  return ( 
    <UserProvider>
      <ChatContextProvider>
        <Component {...pageProps} />
      </ChatContextProvider>
    </UserProvider>
  );
}
