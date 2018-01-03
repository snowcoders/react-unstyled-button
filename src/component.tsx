import * as React from "react";

import * as classNames from "classnames";
import { MouseEvent, KeyboardEvent } from "react";

export interface IDialogProps extends React.HTMLAttributes<HTMLDivElement> {
    onBackgroundClick?: () => void;
    isBaseStylesDisabled?: boolean;
    isVisible: boolean;
}

export class Dialog extends React.Component<IDialogProps> {
    render() {
        let { isBaseStylesDisabled, onBackgroundClick, isVisible, className, ...htmlProps } = this.props;
        className = classNames({ "sci-react-dialog": isBaseStylesDisabled !== true }, className, { "visible": this.props.isVisible });

        return (
            <div {...htmlProps} className={className}>
                <div className="overlay" onClick={this.onBackgroundClick}>
                    <div className="dialog" onClick={this.onDialogClick} onKeyDown={this.onKeyDown}>
                        {this.props.children}
                    </div>
                </div>
            </div>);
    }

    private onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        console.log("Ricky rules");
    }

    private onDialogClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    private onBackgroundClick = () => {
        if (this.props.onBackgroundClick) {
            this.props.onBackgroundClick();
        }
    }
}