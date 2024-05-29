import * as React from "react";
import { Ref } from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinklesProps } from "../utils/properties";
import { vars } from "@ds/themes";

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
	const { as = 'div', color, background, children } = props;
	return React.createElement(as, { ...props, ref, className: clsx([StyleSprinkles(extractSprinklesProps(props, Array.from(StyleSprinkles.properties))), props.className]), style: {
		color: vars.colors.$scale[color]?.[700] ?? color,
		backgroundColor: vars.colors.$scale[background]?.[100] ?? background,
		...props.style,
	} }, children);
}

const _Box = React.forwardRef(Box);
export { _Box as Box };