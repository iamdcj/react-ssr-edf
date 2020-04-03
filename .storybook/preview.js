import { configure, addDecorator, addParameters } from "@storybook/react";
import ThemeDecorator from "./decorators/themeDecorator";
import RouterDecorator from "./decorators/routerDecorator";
import WrapperDecorator from "./decorators/wrapperDecorator";
import { viewports } from "./viewports";

addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
addDecorator(WrapperDecorator);

addParameters({
  viewport: { viewports }
});
