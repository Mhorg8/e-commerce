import { IconType } from "react-icons";

interface AlertProps {
  message: string;
  Icon: IconType;
  textColor: string;
}
const Alert: React.FC<AlertProps> = ({ message, Icon, textColor }) => {
  return (
    <div className={`alert text-${textColor}`}>
      <p className={``}>{message}</p>
      {Icon && <Icon />}
    </div>
  );
};

export default Alert;
