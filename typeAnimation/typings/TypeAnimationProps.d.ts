/**
 * This file was generated from TypeAnimation.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface TypeAnimationContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sequence: EditableValue<string>;
    speed: number;
    deletionSpeed: number;
    repeat: number;
    wrapper: string;
    cursor: boolean;
    styleKey: string;
    classNameKey: string;
    preRenderFirstString: boolean;
    omitDeletionAnimation: boolean;
}

export interface TypeAnimationPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    sequence: string;
    speed: number | null;
    deletionSpeed: number | null;
    repeat: number | null;
    wrapper: string;
    cursor: boolean;
    styleKey: string;
    classNameKey: string;
    preRenderFirstString: boolean;
    omitDeletionAnimation: boolean;
}
