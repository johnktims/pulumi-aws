// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an OpsWorks custom layer resource.
 */
export class CustomLayer extends pulumi.Resource {
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    public readonly autoAssignElasticIps?: pulumi.Computed<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    public readonly autoAssignPublicIps?: pulumi.Computed<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    public readonly autoHealing?: pulumi.Computed<boolean>;
    public readonly customConfigureRecipes?: pulumi.Computed<string[]>;
    public readonly customDeployRecipes?: pulumi.Computed<string[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    public readonly customInstanceProfileArn?: pulumi.Computed<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    public readonly customJson?: pulumi.Computed<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    public readonly customSecurityGroupIds?: pulumi.Computed<string[]>;
    public readonly customSetupRecipes?: pulumi.Computed<string[]>;
    public readonly customShutdownRecipes?: pulumi.Computed<string[]>;
    public readonly customUndeployRecipes?: pulumi.Computed<string[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    public readonly drainElbOnShutdown?: pulumi.Computed<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    public readonly ebsVolume?: pulumi.Computed<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    public readonly elasticLoadBalancer?: pulumi.Computed<string>;
    /**
     * The id of the layer.
     */
    public /*out*/ readonly layerId: pulumi.Computed<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    public readonly installUpdatesOnBoot?: pulumi.Computed<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    public readonly instanceShutdownTimeout?: pulumi.Computed<number>;
    /**
     * A human-readable name for the layer.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
     */
    public readonly shortName: pulumi.Computed<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    public readonly stackId: pulumi.Computed<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    public readonly systemPackages?: pulumi.Computed<string[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    public readonly useEbsOptimizedInstances?: pulumi.Computed<boolean>;

    /**
     * Create a CustomLayer resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this CustomLayer instance
     * @param args A collection of arguments for creating this CustomLayer instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: CustomLayerArgs, dependsOn?: pulumi.Resource[]) {
        if (args.shortName === undefined) {
            throw new Error("Missing required property 'shortName'");
        }
        if (args.stackId === undefined) {
            throw new Error("Missing required property 'stackId'");
        }
        super("aws:opsworks/customLayer:CustomLayer", urnName, {
            "autoAssignElasticIps": args.autoAssignElasticIps,
            "autoAssignPublicIps": args.autoAssignPublicIps,
            "autoHealing": args.autoHealing,
            "customConfigureRecipes": args.customConfigureRecipes,
            "customDeployRecipes": args.customDeployRecipes,
            "customInstanceProfileArn": args.customInstanceProfileArn,
            "customJson": args.customJson,
            "customSecurityGroupIds": args.customSecurityGroupIds,
            "customSetupRecipes": args.customSetupRecipes,
            "customShutdownRecipes": args.customShutdownRecipes,
            "customUndeployRecipes": args.customUndeployRecipes,
            "drainElbOnShutdown": args.drainElbOnShutdown,
            "ebsVolume": args.ebsVolume,
            "elasticLoadBalancer": args.elasticLoadBalancer,
            "installUpdatesOnBoot": args.installUpdatesOnBoot,
            "instanceShutdownTimeout": args.instanceShutdownTimeout,
            "name": args.name,
            "shortName": args.shortName,
            "stackId": args.stackId,
            "systemPackages": args.systemPackages,
            "useEbsOptimizedInstances": args.useEbsOptimizedInstances,
            "layerId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a CustomLayer resource.
 */
export interface CustomLayerArgs {
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: pulumi.ComputedValue<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: pulumi.ComputedValue<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: pulumi.ComputedValue<boolean>;
    readonly customConfigureRecipes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    readonly customDeployRecipes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: pulumi.ComputedValue<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: pulumi.ComputedValue<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    readonly customSetupRecipes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    readonly customShutdownRecipes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    readonly customUndeployRecipes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: pulumi.ComputedValue<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolume?: pulumi.ComputedValue<{ iops?: pulumi.ComputedValue<number>, mountPoint: pulumi.ComputedValue<string>, numberOfDisks: pulumi.ComputedValue<number>, raidLevel?: pulumi.ComputedValue<string>, size: pulumi.ComputedValue<number>, type?: pulumi.ComputedValue<string> }>[];
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: pulumi.ComputedValue<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: pulumi.ComputedValue<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: pulumi.ComputedValue<number>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
     */
    readonly shortName: pulumi.ComputedValue<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId: pulumi.ComputedValue<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: pulumi.ComputedValue<boolean>;
}

