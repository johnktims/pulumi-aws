// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a resource to create a VPC Internet Gateway.
 */
export class InternetGateway extends pulumi.Resource {
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * The VPC ID to create in.
     */
    public readonly vpcId?: pulumi.Computed<string>;

    /**
     * Create a InternetGateway resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this InternetGateway instance
     * @param args A collection of arguments for creating this InternetGateway instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: InternetGatewayArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:ec2/internetGateway:InternetGateway", urnName, {
            "tags": args.tags,
            "vpcId": args.vpcId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a InternetGateway resource.
 */
export interface InternetGatewayArgs {
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * The VPC ID to create in.
     */
    readonly vpcId?: pulumi.ComputedValue<string>;
}

