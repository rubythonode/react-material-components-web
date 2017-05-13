import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__actions`;

export const propertyClassNames = {
    VERTICAL: `${CLASS_NAME}--vertical`,
};

export type MetaProps = {
    vertical?: boolean,
};

export type ChildProps = {
    className?: string,
};

class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.VERTICAL]: props.vertical,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    ClassNameMeta.simple(new PropMaker(), "Container"),
    [
        "vertical",
    ]);
