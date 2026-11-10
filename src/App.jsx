import useRoute from './hooks/useRoute.js';
import { categories } from './data/categories.js';
import Topbar from './components/Topbar.jsx';
import Home from './components/Home.jsx';
import Category from './components/Category.jsx';

export default function App() {
  const route = useRoute();
  const category = categories.find((c) => c.id === route);

  return (
    <>
      <Topbar />
      <main className="container">
        {category ? <Category category={category} /> : <Home />}
      </main>
      <footer className="footer">© 2026 Panthera Floral Studio</footer>
    </>
  );
}
