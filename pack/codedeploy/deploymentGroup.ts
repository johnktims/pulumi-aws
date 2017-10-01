// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CodeDeploy deployment group for an application
 */
export class DeploymentGroup extends pulumi.Resource {
    /**
     * A list of alarms associated with the deployment group, documented below.
     */
    public readonly alarmConfiguration?: pulumi.Computed<{ alarms?: string[], enabled?: boolean, ignorePollAlarmFailure?: boolean }[]>;
    /**
     * The name of the application.
     */
    public readonly appName: pulumi.Computed<string>;
    /**
     * The automatic rollback configuration associated with the deployment group, documented below.
     */
    public readonly autoRollbackConfiguration?: pulumi.Computed<{ enabled?: boolean, events?: string[] }[]>;
    /**
     * Autoscaling groups associated with the deployment group.
     */
    public readonly autoscalingGroups?: pulumi.Computed<string[]>;
    /**
     * The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
     */
    public readonly deploymentConfigName?: pulumi.Computed<string>;
    /**
     * The name of the deployment group.
     */
    public readonly deploymentGroupName: pulumi.Computed<string>;
    /**
     * Tag filters associated with the group. See the AWS docs for details.
     */
    public readonly ec2TagFilter?: pulumi.Computed<{ key?: string, type?: string, value?: string }[]>;
    /**
     * On premise tag filters associated with the group. See the AWS docs for details.
     */
    public readonly onPremisesInstanceTagFilter?: pulumi.Computed<{ key?: string, type?: string, value?: string }[]>;
    /**
     * The service role ARN that allows deployments.
     */
    public readonly serviceRoleArn: pulumi.Computed<string>;
    /**
     * A Trigger Configuration block. Trigger Configurations are documented below.
     */
    public readonly triggerConfiguration?: pulumi.Computed<{ triggerEvents: string[], triggerName: string, triggerTargetArn: string }[]>;

    /**
     * Create a DeploymentGroup resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this DeploymentGroup instance
     * @param args A collection of arguments for creating this DeploymentGroup instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: DeploymentGroupArgs, dependsOn?: pulumi.Resource[]) {
        if (args.appName === undefined) {
            throw new Error("Missing required property 'appName'");
        }
        if (args.deploymentGroupName === undefined) {
            throw new Error("Missing required property 'deploymentGroupName'");
        }
        if (args.serviceRoleArn === undefined) {
            throw new Error("Missing required property 'serviceRoleArn'");
        }
        super("aws:codedeploy/deploymentGroup:DeploymentGroup", urnName, {
            "alarmConfiguration": args.alarmConfiguration,
            "appName": args.appName,
            "autoRollbackConfiguration": args.autoRollbackConfiguration,
            "autoscalingGroups": args.autoscalingGroups,
            "deploymentConfigName": args.deploymentConfigName,
            "deploymentGroupName": args.deploymentGroupName,
            "ec2TagFilter": args.ec2TagFilter,
            "onPremisesInstanceTagFilter": args.onPremisesInstanceTagFilter,
            "serviceRoleArn": args.serviceRoleArn,
            "triggerConfiguration": args.triggerConfiguration,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a DeploymentGroup resource.
 */
export interface DeploymentGroupArgs {
    /**
     * A list of alarms associated with the deployment group, documented below.
     */
    readonly alarmConfiguration?: pulumi.ComputedValue<{ alarms?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], enabled?: pulumi.ComputedValue<boolean>, ignorePollAlarmFailure?: pulumi.ComputedValue<boolean> }>[];
    /**
     * The name of the application.
     */
    readonly appName: pulumi.ComputedValue<string>;
    /**
     * The automatic rollback configuration associated with the deployment group, documented below.
     */
    readonly autoRollbackConfiguration?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, events?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[] }>[];
    /**
     * Autoscaling groups associated with the deployment group.
     */
    readonly autoscalingGroups?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
     */
    readonly deploymentConfigName?: pulumi.ComputedValue<string>;
    /**
     * The name of the deployment group.
     */
    readonly deploymentGroupName: pulumi.ComputedValue<string>;
    /**
     * Tag filters associated with the group. See the AWS docs for details.
     */
    readonly ec2TagFilter?: pulumi.ComputedValue<{ key?: pulumi.ComputedValue<string>, type?: pulumi.ComputedValue<string>, value?: pulumi.ComputedValue<string> }>[];
    /**
     * On premise tag filters associated with the group. See the AWS docs for details.
     */
    readonly onPremisesInstanceTagFilter?: pulumi.ComputedValue<{ key?: pulumi.ComputedValue<string>, type?: pulumi.ComputedValue<string>, value?: pulumi.ComputedValue<string> }>[];
    /**
     * The service role ARN that allows deployments.
     */
    readonly serviceRoleArn: pulumi.ComputedValue<string>;
    /**
     * A Trigger Configuration block. Trigger Configurations are documented below.
     */
    readonly triggerConfiguration?: pulumi.ComputedValue<{ triggerEvents: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], triggerName: pulumi.ComputedValue<string>, triggerTargetArn: pulumi.ComputedValue<string> }>[];
}

