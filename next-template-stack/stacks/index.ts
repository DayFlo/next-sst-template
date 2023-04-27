import 'source-map-support/register';
import * as dotenv from 'dotenv';
import { NextjsSite, StackContext, NextjsSiteProps } from 'sst/constructs';

import { domain, zone } from '../sst.config';

dotenv.config()

export function NextTemplateStack(app: StackContext) {
  const { stack } = app;

  const options: NextjsSiteProps = {
    path: 'packages/next-app',
    buildCommand: "yarn run build:prod", // Default to yarn
    environment: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "",
    },
    customDomain: {
      domainName: domain,
      hostedZone: zone,
    },
    runtime: "nodejs16.x", // Default to nodejs14.x to match lambda default
  };

  // See mono/node_modules/sst/constructs/SsrSite.d.ts
  const site = new NextjsSite(stack, 'NextTemplateSite', options);

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
