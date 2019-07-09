import * as React from "react";

import "./styles.scss";

export interface IUnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBaseStylesDisabled?: boolean;
  innerRefHandler?: (ref: null | HTMLButtonElement) => void;
}

export class UnstyledButton extends React.Component<IUnstyledButtonProps> {
  render() {
    let {
      className,
      innerRefHandler,
      isBaseStylesDisabled,
      type,
      ...htmlProps
    } = this.props;
    let classNameArray = [];
    if (isBaseStylesDisabled !== true) {
      classNameArray.push("sci-react-unstyled-button");
    }
    if (className != null) {
      classNameArray.push(className);
    }

    return (
      <button
        ref={innerRefHandler}
        {...htmlProps}
        className={classNameArray.join(" ")}
        type={type || "button"}
      />
    );
  }
}
