import { useEffect, useState } from 'react';

// #/bouquets kimi sadə hash marşrutu: brauzerin "geri" düyməsi də işləyir.
const read = () => window.location.hash.replace(/^#\/?/, '');

export default function useRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
