import { ReactElement, createElement } from "react";

import { TypeAnimationInput, TypeAnimationInputProps } from "./components/TypeAnimationInput";
import { TypeAnimationPreviewProps } from "../typings/TypeAnimationProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: TypeAnimationPreviewProps): TypeAnimationInputProps {
    return {
        sequence: props.sequence||'',
        speed: props.speed || 40,
        deletionSpeed: props.deletionSpeed || 50,
        repeatVal: props.repeat || 0,
        wrapperVal: props.wrapper,
        cursorVal: props.cursor ,
        styleVal: props.style,
        classNameVal: props.className,
        preRenderFirstStringVal:props.preRenderFirstString,
        omitDeletionAnimationVal:props.omitDeletionAnimation
    };
}

export function preview(props: TypeAnimationPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <TypeAnimationInput {...transformProps(props)}></TypeAnimationInput>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/TypeAnimation.css");
}
