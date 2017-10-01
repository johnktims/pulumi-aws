// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Use this data source to get the [IP ranges][1] of various AWS products and services.
 */
export function getIpRanges(args: GetIpRangesArgs): Promise<GetIpRangesResult> {
    return pulumi.runtime.invoke("aws:index/getIpRanges:getIpRanges", {
        "regions": args.regions,
        "services": args.services,
    });
}

/**
 * A collection of arguments for invoking getIpRanges.
 */
export interface GetIpRangesArgs {
    /**
     * Filter IP ranges by regions (or include all regions, if
     * omitted). Valid items are `global` (for `cloudfront`) as well as all AWS regions
     * (e.g. `eu-central-1`)
     */
    regions?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * Filter IP ranges by services. Valid items are `amazon`
     * (for amazon.com), `cloudfront`, `ec2`, `route53`, `route53_healthchecks` and `S3`.
     */
    services: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
}

/**
 * A collection of values returned by getIpRanges.
 */
export interface GetIpRangesResult {
    /**
     * The lexically ordered list of CIDR blocks.
     */
    cidrBlocks: string[];
    /**
     * The publication time of the IP ranges (e.g. `2016-08-03-23-46-05`).
     */
    createDate: string;
    /**
     * The publication time of the IP ranges, in Unix epoch time format
     * (e.g. `1470267965`).
     */
    syncToken: number;
}

