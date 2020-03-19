export const env = __ClientSide__ ? __OCEP_ENV__ : process.env.CXP_ENV;

export default () => env || "PRD";
