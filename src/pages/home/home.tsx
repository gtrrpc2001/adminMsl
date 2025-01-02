type Props = {
  test: string;
};

export const Home = ({ test }: Props) => {
  return (
    <div>
      <h2>{test}</h2>
    </div>
  );
};
