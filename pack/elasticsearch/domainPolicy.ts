// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Allows setting policy to an ElasticSearch domain while referencing domain attributes (e.g. ARN)
 */
export class DomainPolicy extends pulumi.Resource {
    /**
     * IAM policy document specifying the access policies for the domain
     */
    public readonly accessPolicies: pulumi.Computed<string>;
    /**
     * Name of the domain.
     */
    public readonly domainName: pulumi.Computed<string>;

    /**
     * Create a DomainPolicy resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this DomainPolicy instance
     * @param args A collection of arguments for creating this DomainPolicy instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: DomainPolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.accessPolicies === undefined) {
            throw new Error("Missing required property 'accessPolicies'");
        }
        if (args.domainName === undefined) {
            throw new Error("Missing required property 'domainName'");
        }
        super("aws:elasticsearch/domainPolicy:DomainPolicy", urnName, {
            "accessPolicies": args.accessPolicies,
            "domainName": args.domainName,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a DomainPolicy resource.
 */
export interface DomainPolicyArgs {
    /**
     * IAM policy document specifying the access policies for the domain
     */
    readonly accessPolicies: pulumi.ComputedValue<string>;
    /**
     * Name of the domain.
     */
    readonly domainName: pulumi.ComputedValue<string>;
}

