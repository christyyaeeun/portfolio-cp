/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type CrdProps = React.PropsWithChildren<Partial<ViewProps> & {
    project?: Project;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Crd(props: CrdProps): React.ReactElement;
