// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an Application AutoScaling ScalableTarget resource.
 */
export class Target extends pulumi.Resource {
    /**
     * The max capacity of the scalable target.
     */
    public readonly maxCapacity: pulumi.Computed<number>;
    /**
     * The min capacity of the scalable target.
     */
    public readonly minCapacity: pulumi.Computed<number>;
    /**
     * The resource type and unique identifier string for the resource associated with the scalable target.
     * For Amazon ECS services, this value is the resource type, followed by the cluster name and service name, for example, `service/default/sample-webapp`.
     * For Amazon EC2 Spot fleet requests, the resource type is `spot-fleet-request`, and the identifier is the Spot fleet request ID; for example, `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     * For Amazon EMR Cluster Instance Groups, the resource type is `instancegroup`, the identifier is the Cluster Id and the Instance Group Id; for example, `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
     */
    public readonly resourceId: pulumi.Computed<string>;
    /**
     * The ARN of the IAM role that allows Application
     * AutoScaling to modify your scalable target on your behalf.
     */
    public readonly roleArn: pulumi.Computed<string>;
    /**
     * The scalable dimension of the scalable target. The scalable dimension contains the service namespace, resource
     * type, and scaling property, such as `ecs:service:DesiredCount` for the desired task count of an Amazon ECS service,
     * `ec2:spot-fleet-request:TargetCapacity` for the target capacity of an Amazon EC2 Spot fleet request or
     * `elasticmapreduce:instancegroup:InstanceCount` for the Instance count of an EMR Cluster Instance Group.
     */
    public readonly scalableDimension: pulumi.Computed<string>;
    /**
     * The AWS service namespace of the scalable target.
     * Valid values are `ecs` for Amazon ECS services, `ec2` Amazon EC2 Spot fleet requests and `elasticmapreduce` for Amazon EMR Clusters.
     */
    public readonly serviceNamespace: pulumi.Computed<string>;

    /**
     * Create a Target resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Target instance
     * @param args A collection of arguments for creating this Target instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: TargetArgs, dependsOn?: pulumi.Resource[]) {
        if (args.maxCapacity === undefined) {
            throw new Error("Missing required property 'maxCapacity'");
        }
        if (args.minCapacity === undefined) {
            throw new Error("Missing required property 'minCapacity'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.roleArn === undefined) {
            throw new Error("Missing required property 'roleArn'");
        }
        if (args.scalableDimension === undefined) {
            throw new Error("Missing required property 'scalableDimension'");
        }
        if (args.serviceNamespace === undefined) {
            throw new Error("Missing required property 'serviceNamespace'");
        }
        super("aws:appautoscaling/target:Target", urnName, {
            "maxCapacity": args.maxCapacity,
            "minCapacity": args.minCapacity,
            "resourceId": args.resourceId,
            "roleArn": args.roleArn,
            "scalableDimension": args.scalableDimension,
            "serviceNamespace": args.serviceNamespace,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Target resource.
 */
export interface TargetArgs {
    /**
     * The max capacity of the scalable target.
     */
    readonly maxCapacity: pulumi.ComputedValue<number>;
    /**
     * The min capacity of the scalable target.
     */
    readonly minCapacity: pulumi.ComputedValue<number>;
    /**
     * The resource type and unique identifier string for the resource associated with the scalable target.
     * For Amazon ECS services, this value is the resource type, followed by the cluster name and service name, for example, `service/default/sample-webapp`.
     * For Amazon EC2 Spot fleet requests, the resource type is `spot-fleet-request`, and the identifier is the Spot fleet request ID; for example, `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     * For Amazon EMR Cluster Instance Groups, the resource type is `instancegroup`, the identifier is the Cluster Id and the Instance Group Id; for example, `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
     */
    readonly resourceId: pulumi.ComputedValue<string>;
    /**
     * The ARN of the IAM role that allows Application
     * AutoScaling to modify your scalable target on your behalf.
     */
    readonly roleArn: pulumi.ComputedValue<string>;
    /**
     * The scalable dimension of the scalable target. The scalable dimension contains the service namespace, resource
     * type, and scaling property, such as `ecs:service:DesiredCount` for the desired task count of an Amazon ECS service,
     * `ec2:spot-fleet-request:TargetCapacity` for the target capacity of an Amazon EC2 Spot fleet request or
     * `elasticmapreduce:instancegroup:InstanceCount` for the Instance count of an EMR Cluster Instance Group.
     */
    readonly scalableDimension: pulumi.ComputedValue<string>;
    /**
     * The AWS service namespace of the scalable target.
     * Valid values are `ecs` for Amazon ECS services, `ec2` Amazon EC2 Spot fleet requests and `elasticmapreduce` for Amazon EMR Clusters.
     */
    readonly serviceNamespace: pulumi.ComputedValue<string>;
}

