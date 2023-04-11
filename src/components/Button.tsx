interface Props {
  label: string;
  children?: React.ReactNode;
  handleClick: () => void;
}

const Button: React.FC<Props> = ({ label, handleClick }) => (
  <button className="btn btn-primary w-64 rounded-full" onClick={handleClick}>
    {label}
  </button>
);

export default Button;
