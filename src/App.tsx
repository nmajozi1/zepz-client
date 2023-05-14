import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './pages/Home.page';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <Home />
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App
