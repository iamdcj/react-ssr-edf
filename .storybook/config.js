import { configure, addDecorator } from "@storybook/react";
import ThemeDecorator from "./decorators/themeDecorator";
import RouterDecorator from "./decorators/routerDecorator";

const req = require.context("../src/client", true, /\.stories\.(mdx|[tj]sx?)$/);

configure(req, module);

addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
