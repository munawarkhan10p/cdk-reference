#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkReferenceStack } from '../cdk/cdk-reference-stack';

const app = new cdk.App();
new CdkReferenceStack(app, 'CdkReferenceStack');
