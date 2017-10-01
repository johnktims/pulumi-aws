// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Allows you to set a policy of an SQS Queue
 * while referencing ARN of the queue within the policy.
 */
export class QueuePolicy extends pulumi.Resource {
    /**
     * The JSON policy for the SQS queue
     */
    public readonly policy: pulumi.Computed<string>;
    /**
     * The URL of the SQS Queue to which to attach the policy
     */
    public readonly queueUrl: pulumi.Computed<string>;

    /**
     * Create a QueuePolicy resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this QueuePolicy instance
     * @param args A collection of arguments for creating this QueuePolicy instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: QueuePolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        if (args.queueUrl === undefined) {
            throw new Error("Missing required property 'queueUrl'");
        }
        super("aws:sqs/queuePolicy:QueuePolicy", urnName, {
            "policy": args.policy,
            "queueUrl": args.queueUrl,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a QueuePolicy resource.
 */
export interface QueuePolicyArgs {
    /**
     * The JSON policy for the SQS queue
     */
    readonly policy: pulumi.ComputedValue<string>;
    /**
     * The URL of the SQS Queue to which to attach the policy
     */
    readonly queueUrl: pulumi.ComputedValue<string>;
}

