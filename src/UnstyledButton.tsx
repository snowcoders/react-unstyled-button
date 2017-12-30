import * as React from "react";

import * as classNames from "classnames";

export class UnstyledButton extends React.Component<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    render() {
        const className = classNames("sci-react-unstyled-button", this.props.className);

        return <button {...this.props} className={className} />;
    }
}