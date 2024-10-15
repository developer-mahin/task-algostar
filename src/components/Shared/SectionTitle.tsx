type TSectionTitle = {
  title: string;
  shortDes: string;
};

const SectionTitle: React.FC<TSectionTitle> = ({ title, shortDes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{shortDes}</p>
    </div>
  );
};

export default SectionTitle;
