// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Use this data source to get the Account ID of the [AWS Billing and Cost Management Service Account](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-getting-started.html#step-2) for the purpose of whitelisting in S3 bucket policy.
 */
export function getBillingServiceAccount(): Promise<GetBillingServiceAccountResult> {
    return pulumi.runtime.invoke("aws:index/getBillingServiceAccount:getBillingServiceAccount", {
    });
}

/**
 * A collection of values returned by getBillingServiceAccount.
 */
export interface GetBillingServiceAccountResult {
    /**
     * The ARN of the AWS billing service account.
     */
    arn: string;
}

