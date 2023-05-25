import { OrderDetailsProvider } from '../src/contexts/OrderDetails';
import { OrderEntry } from '../src/components/OrderEntry';

function Home() {
  return (
    <>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </>
  );
}

export default Home;
