import { CustomContenterTitle } from "./styles";

interface ITitle {
  title: string;
}
export const Title = ({ title }: ITitle) => {
  return (
    <CustomContenterTitle>
      <h1>{title}</h1>
      <div className="horizontal-line" />
    </CustomContenterTitle>
  );
};
