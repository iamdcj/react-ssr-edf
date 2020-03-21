import ErrorUI from "./errorUI";

const returnError = (error: Error, res: any) => {
  console.error(error.message);
  res.status(500).send(ErrorUI());
};

export default returnError;
