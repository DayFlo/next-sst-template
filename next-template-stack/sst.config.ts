import { SSTConfig } from "sst";
import { API } from "./stacks/rest-api-stack";
import { NextTemplateStack } from "./stacks/index";

export const domain = `next-template-stack.${process.env.ROOT_DOMAIN}`;
export const zone = `${process.env.ROOT_DOMAIN}`;
export default {
  config(_input) {
    return {
      name: "next-template-stack",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(NextTemplateStack);
    app.stack(API);
  }
} satisfies SSTConfig;
