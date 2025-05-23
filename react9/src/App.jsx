import { useEffect, useState } from 'react';

export default function App() {
  const [netflixOriginals, setNetflixOriginals] = useState([]);
 

  useEffect(() => {
    // Fetch Netflix originals
    fetch('https://api.github.com/repos/octocat/Spoon-Knife')
      .then(res => res.json())
      .then(data => setNetflixOriginals(data.results));
  }, []);

  return (
    <div className="app">
      {`Hello ${netflixOriginals}`}
    </div>
  );
}