import Image from 'next/image';
import { useOrderDetails } from '../../contexts/OrderDetails';

export type ScoopProps = {
  name: string;
  imagePath: string;
};
export type ScoopOptionT = ({ name, imagePath }: ScoopProps) => JSX.Element;

const ScoopOption: ScoopOptionT = ({ name, imagePath }) => {
  const { updateItemCount } = useOrderDetails()!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, 'scoops', +e.target.value);
  };

  return (
    <>
      <Image src={imagePath} alt={`${name} scoop`} width={64} height={64} />
      <p>{name}</p>
      <div onChange={handleChange}>{`->`}</div>
    </>
  );
};

export default ScoopOption;
