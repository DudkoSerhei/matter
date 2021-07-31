import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer>
        <p>{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
