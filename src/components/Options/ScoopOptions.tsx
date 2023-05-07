import Image from 'next/image';

export type ScoopProps = {
  name: string;
  imagePath: string;
};
export type ScoopOptionT = ({ name, imagePath }: ScoopProps) => JSX.Element;

const ScoopOption: ScoopOptionT = ({ name, imagePath }) => {
  return (
    <>
      <span>name: {name}</span>
    </>
  );
};

export default ScoopOption;
