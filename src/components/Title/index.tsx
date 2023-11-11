import { CustomContenterTitle } from "./styles";

interface ITitle {
  title: string;
  size: number;
}
export const Title = ({ title, size }: ITitle) => {
  return (
    <CustomContenterTitle size={size}>
      <h1>{title}</h1>
      <div className="horizontal-line" />
    </CustomContenterTitle>
  );
};
