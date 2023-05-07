import type { AppProps } from 'next/app';

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   import('../src/mocks').then(({ setupMocks }) => {
//     setupMocks();
//   });
// }

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/mocks');
}

export default function App({ Component, pageProps }: AppProps) {
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
