import { Config, Api } from "sst/constructs";
import { Secret } from "sst/constructs/Secret";

export class API_SECRETS_STACK {
  SECRET_KEY: Secret

  constructor(stack: Api) {
    this.SECRET_KEY = new Config.Secret(stack, process.env.SECRET_KEY || '');
  }
}
