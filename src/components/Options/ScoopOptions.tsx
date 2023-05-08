import Image from 'next/image';

export type ScoopProps = {
  name: string;
  imagePath: string;
};
export type ScoopOptionT = ({ name, imagePath }: ScoopProps) => JSX.Element;

const ScoopOption: ScoopOptionT = ({ name, imagePath }) => {
  return (
    <div>
      <Image src={imagePath} alt={`${name} scoop`} width={64} height={64} />
    </div>
  );
};

export default ScoopOption;
