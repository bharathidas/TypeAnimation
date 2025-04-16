import { ReactElement, createElement } from "react";
import { TypeAnimation } from 'react-type-animation';

export interface TypeAnimationInputProps {

    sequence: string;
    speed: number;
    deletionSpeed: number;
    repeatVal: number;
    wrapperVal?: string;
    cursorVal?: boolean;
    styleVal?: string;
    classNameVal?: string;
    preRenderFirstStringVal: boolean;
    omitDeletionAnimationVal: boolean;

}

type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
    11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
    21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
    31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
    41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
    51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
    61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 |
    71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
    81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
    91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;

export function TypeAnimationInput(props: TypeAnimationInputProps): ReactElement {
    const { sequence, speed, deletionSpeed, repeatVal, wrapperVal, cursorVal, styleVal, classNameVal, preRenderFirstStringVal, omitDeletionAnimationVal } = props;


    // Parse the sequence from a string to an array
    const parseSequence = (seq: string): (string | number)[] => {
        try {
            // Try to parse as JSON array first
            const parsed = JSON.parse(seq);
            if (Array.isArray(parsed)) {
                return parsed;
            }

            // Fallback to comma-separated values
            return seq.split(",").map(item => {
                const trimmed = item.trim();
                // Check if the item is a number (with optional ms suffix)
                const numMatch = trimmed.match(/^(\d+)(ms)?$/);
                if (numMatch) {
                    return parseInt(numMatch[1], 10);
                }
                return trimmed;
            });
        } catch (e) {
            // If JSON parsing fails, treat as a single string
            return [seq];
        }
    };

    const defaultSequence = '["Hello", 1000, "Worldsssssss"]';

    let seqVal = sequence || defaultSequence;

    const animationSequence = parseSequence(seqVal);

    // Validate speed values are within range
    const validatedSpeed = Math.min(99, Math.max(1, speed)) as Speed;
    const validatedDeletionSpeed = Math.min(99, Math.max(1, deletionSpeed)) as Speed;



    return (
        <div className={classNameVal} style={styleVal ? JSON.parse(styleVal) : undefined}>
            <TypeAnimation
                key={JSON.stringify(animationSequence)}
                sequence={animationSequence}
                wrapper={wrapperVal as any}
                repeat={repeatVal == 0 ? Infinity : repeatVal}
                cursor={cursorVal}
                preRenderFirstString={preRenderFirstStringVal}
                speed={validatedSpeed}
                deletionSpeed={validatedDeletionSpeed}
                omitDeletionAnimation={omitDeletionAnimationVal}
            />
        </div>
    );
}
