import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="text-center">
        <h2>HOME</h2>
        <ul>
          <li className="mt-5">
            {' '}
            Open
            <a href="http://localhost:4000/greeting">here</a>
            {' '}
            in your browser to see a random greeting.
          </li>
        </ul>
      </div>

    </div>
  );
}
