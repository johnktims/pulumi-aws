// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * ~> **Note:** `aws_alb` is know as `aws_lb`. The functionality is identical.
 * 
 * Provides information about a Load Balancer.
 * 
 * This data source can prove useful when a module accepts an LB as an input
 * variable and needs to, for example, determine the security groups associated
 * with it, etc.
 */
export function getLoadBalancerInfo(args?: GetLoadBalancerInfoArgs): Promise<GetLoadBalancerInfoResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:elasticloadbalancingv2/getLoadBalancerInfo:getLoadBalancerInfo", {
        "arn": args.arn,
        "name": args.name,
        "tags": args.tags,
    });
}

/**
 * A collection of arguments for invoking getLoadBalancerInfo.
 */
export interface GetLoadBalancerInfoArgs {
    /**
     * The full ARN of the load balancer.
     */
    arn?: pulumi.ComputedValue<string>;
    /**
     * The unique name of the load balancer.
     */
    name?: pulumi.ComputedValue<string>;
    tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

/**
 * A collection of values returned by getLoadBalancerInfo.
 */
export interface GetLoadBalancerInfoResult {
    accessLogs: { bucket: string, enabled: boolean, prefix: string }[];
    arn: string;
    arnSuffix: string;
    dnsName: string;
    enableDeletionProtection: boolean;
    idleTimeout: number;
    internal: boolean;
    loadBalancerType: string;
    name: string;
    securityGroups: string[];
    subnetMapping: { allocationId?: string, subnetId: string }[];
    subnets: string[];
    tags: {[key: string]: any};
    vpcId: string;
    zoneId: string;
}

