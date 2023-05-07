/* eslint-disable @typescript-eslint/no-var-requires */
// if (typeof window === 'undefined') {
//   const { server } = require('./server');
//   server.listen();
// } else {
//   const { worker } = require('./browser');
//   worker.start();
// }

// export {};

// const IS_BROWSER = typeof window !== 'undefined';

// export const setupMocks = async () => {
//   if (IS_BROWSER) {
//     const { worker } = await import('./browser');
//     worker.start();
//   } else {
//     const { server } = await import('./server');
//     server.listen();
//   }
// };

async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
}

initMocks();

export {};
