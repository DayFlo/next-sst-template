import { StackContext, Api, ApiDomainProps } from "sst/constructs";

import { domain, zone } from "../sst.config";

export function API({ stack }: StackContext) {
  const customDomain: ApiDomainProps = {
    domainName: domain,
    path: "v1",
    hostedZone: zone,
  }

  const api: Api = new Api(stack, "api", {
    accessLog: true,
    customDomain,
    routes: {
      "GET /": "packages/api/src/lambda.getHandler",
      "POST /": "packages/api/src/lambda.posthandler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
