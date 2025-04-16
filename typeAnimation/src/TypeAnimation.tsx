import { ReactElement, createElement } from "react";

import { TypeAnimationContainerProps } from "../typings/TypeAnimationProps";
import { TypeAnimationInput } from "./components/TypeAnimationInput";
import "./ui/TypeAnimation.css";

export function TypeAnimation(props: TypeAnimationContainerProps): ReactElement {
    const { sequence,speed,deletionSpeed,repeat,wrapper,cursor,styleKey,classNameKey,preRenderFirstString,omitDeletionAnimation } = props;
    
      return (
        <TypeAnimationInput
           
            sequence={sequence.displayValue}
            speed={speed || 40}
            deletionSpeed={deletionSpeed || 50}
            repeatVal={repeat || 0}
            wrapperVal={wrapper || 'span'}
            cursorVal={cursor }
            styleVal={styleKey ||'' }
            classNameVal={classNameKey }
            preRenderFirstStringVal={preRenderFirstString}
            omitDeletionAnimationVal={omitDeletionAnimation}
        />
    );
}
