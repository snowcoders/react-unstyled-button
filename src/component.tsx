import * as React from "react";

export interface IUnstyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isBaseStylesDisabled?: boolean
}

export class UnstyledButton extends React.Component<IUnstyledButtonProps> {
    render() {
        let { isBaseStylesDisabled, className, type, ...htmlProps } = this.props;
        let classNameArray = [];
        if (isBaseStylesDisabled !== true) {
            classNameArray.push("sci-react-unstyled-button");
        }
        if (className != null) {
            classNameArray.push(className);
        }

        return <button {...htmlProps} className={classNameArray.join(" ")} type={type || "button"} />;
    }
}