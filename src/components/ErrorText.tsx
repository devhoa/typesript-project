import React from "react";
import Icon from "react-icons-kit";
import { ic_error_outline_outline } from "react-icons-kit/md/ic_error_outline_outline";

export interface IErrorTextProps {
  error: string;
}

const ErrorText: React.FC<IErrorTextProps> = (props) => {
  const { error } = props;

  if (error === "") return null;

  return (
    <small className="text-danger form-text">
      <div className="d-flex justify-content-start align-items-center mt-2">
        <Icon icon={ic_error_outline_outline} size={25} />
        Sai mật khẩu hoặc tên đăng nhập
      </div>
    </small>
  );
};

export default ErrorText;
