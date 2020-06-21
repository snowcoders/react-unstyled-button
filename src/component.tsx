import * as React from "react";

import "./styles.scss";

export type UnstyledButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const UnstyledButton = React.forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>((props, ref) => {
  const { className, type, ...rest } = props;
  const classNameArray = ["sci-react-unstyled-button"];
  if (className != null) {
    classNameArray.push(className);
  }
  return (
    <button
      ref={ref}
      className={classNameArray.join(" ")}
      type={type || "button"}
      {...rest}
    ></button>
  );
});
