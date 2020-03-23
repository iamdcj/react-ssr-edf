import { configure } from "@storybook/react";
const req = require.context("../src/client", true, /\.stories\.(mdx|[tj]sx?)$/);

configure(req, module);
