// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * `aws_eip` provides details about a specific Elastic IP.
 * 
 * This resource can prove useful when a module accepts an allocation ID or
 * public IP as an input variable and needs to determine the other.
 */
export function getElasticIp(args?: GetElasticIpArgs): Promise<GetElasticIpResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:index/getElasticIp:getElasticIp", {
        "id": args.id,
        "publicIp": args.publicIp,
    });
}

/**
 * A collection of arguments for invoking getElasticIp.
 */
export interface GetElasticIpArgs {
    /**
     * The allocation id of the specific EIP to retrieve.
     */
    id?: pulumi.ComputedValue<string>;
    /**
     * The public IP of the specific EIP to retrieve.
     */
    publicIp?: pulumi.ComputedValue<string>;
}

/**
 * A collection of values returned by getElasticIp.
 */
export interface GetElasticIpResult {
    id: string;
    publicIp: string;
}

