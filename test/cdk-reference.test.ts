import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import * as CdkReference from '../cdk/cdk-reference-stack';

test('Empty Stack', () => {
    const app = new App();
    // WHEN
    const stack = new CdkReference.CdkReferenceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
