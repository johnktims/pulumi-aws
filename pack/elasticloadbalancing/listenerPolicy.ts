// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Attaches a load balancer policy to an ELB Listener.
 * 
 */
export class ListenerPolicy extends pulumi.Resource {
    /**
     * The load balancer to attach the policy to.
     */
    public readonly loadBalancerName: pulumi.Computed<string>;
    /**
     * The load balancer listener port to apply the policy to.
     */
    public readonly loadBalancerPort: pulumi.Computed<number>;
    /**
     * List of Policy Names to apply to the backend server.
     */
    public readonly policyNames?: pulumi.Computed<string[]>;

    /**
     * Create a ListenerPolicy resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ListenerPolicy instance
     * @param args A collection of arguments for creating this ListenerPolicy instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: ListenerPolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.loadBalancerName === undefined) {
            throw new Error("Missing required property 'loadBalancerName'");
        }
        if (args.loadBalancerPort === undefined) {
            throw new Error("Missing required property 'loadBalancerPort'");
        }
        super("aws:elasticloadbalancing/listenerPolicy:ListenerPolicy", urnName, {
            "loadBalancerName": args.loadBalancerName,
            "loadBalancerPort": args.loadBalancerPort,
            "policyNames": args.policyNames,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ListenerPolicy resource.
 */
export interface ListenerPolicyArgs {
    /**
     * The load balancer to attach the policy to.
     */
    readonly loadBalancerName: pulumi.ComputedValue<string>;
    /**
     * The load balancer listener port to apply the policy to.
     */
    readonly loadBalancerPort: pulumi.ComputedValue<number>;
    /**
     * List of Policy Names to apply to the backend server.
     */
    readonly policyNames?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
}

