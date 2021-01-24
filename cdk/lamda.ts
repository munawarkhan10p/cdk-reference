import { Runtime, Tracing } from "@aws-cdk/aws-lambda";


const lambdaProps = {
    handler: 'index.lambdaHandler',
    runtime: Runtime.NODEJS_12_X,
    tracing: Tracing.ACTIVE,
  };