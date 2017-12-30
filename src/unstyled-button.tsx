import * as React from "react";

import * as classNames from "classnames";

export interface IUnstyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isBaseStylesDisabled?: boolean
}

export class UnstyledButton extends React.Component<IUnstyledButtonProps> {
    render() {
        let { isBaseStylesDisabled, className, ...htmlProps } = this.props;
        if (isBaseStylesDisabled !== true) {
            className = classNames("sci-react-unstyled-button", className);
        } else {
            className = className;
        }

        return <button {...htmlProps} className={className} />;
    }
}