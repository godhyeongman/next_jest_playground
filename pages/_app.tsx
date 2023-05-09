import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   import('../src/mocks').then(({ setupMocks }) => {
//     setupMocks();
//   });
// }

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../src/mocks');
// }

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(
    !process.env.NEXT_PUBLIC_API_MOCKING,
  );

  useEffect(() => {
    async function initMocks() {
      const { setupMocks } = await import('../src/mocks');
      await setupMocks();
      setShouldRender(true);
    }

    if (process.env.NEXT_PUBLIC_API_MOCKING) {
      initMocks();
    }
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
