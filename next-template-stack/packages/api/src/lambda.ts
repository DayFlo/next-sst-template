import { ApiHandler } from "sst/node/api";
export const getHandler = ApiHandler(async (_evt) => {
  return {
    body: `Hello world. The time is ${Date.now()}`,
  };
});

export const postHandler = ApiHandler(async (evt) => {
  return {
    body: `Hello ${evt.body}`,
  };
});
