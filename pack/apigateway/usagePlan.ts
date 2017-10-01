// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an API Gateway Usage Plan.
 */
export class UsagePlan extends pulumi.Resource {
    /**
     * The associated [API stages](#api-stages-arguments) of the usage plan.
     */
    public readonly apiStages?: pulumi.Computed<{ apiId: string, stage: string }[]>;
    /**
     * The description of a usage plan.
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The name of the usage plan.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
     */
    public readonly productCode?: pulumi.Computed<string>;
    /**
     * The [quota settings](#quota-settings-arguments) of the usage plan.
     */
    public readonly quotaSettings?: pulumi.Computed<{ limit: number, offset?: number, period: string }[]>;
    /**
     * The [throttling limits](#throttling-settings-arguments) of the usage plan.
     */
    public readonly throttleSettings?: pulumi.Computed<{ burstLimit?: number, rateLimit?: number }[]>;

    /**
     * Create a UsagePlan resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this UsagePlan instance
     * @param args A collection of arguments for creating this UsagePlan instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: UsagePlanArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:apigateway/usagePlan:UsagePlan", urnName, {
            "apiStages": args.apiStages,
            "description": args.description,
            "name": args.name,
            "productCode": args.productCode,
            "quotaSettings": args.quotaSettings,
            "throttleSettings": args.throttleSettings,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a UsagePlan resource.
 */
export interface UsagePlanArgs {
    /**
     * The associated [API stages](#api-stages-arguments) of the usage plan.
     */
    readonly apiStages?: pulumi.ComputedValue<{ apiId: pulumi.ComputedValue<string>, stage: pulumi.ComputedValue<string> }>[];
    /**
     * The description of a usage plan.
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The name of the usage plan.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
     */
    readonly productCode?: pulumi.ComputedValue<string>;
    /**
     * The [quota settings](#quota-settings-arguments) of the usage plan.
     */
    readonly quotaSettings?: pulumi.ComputedValue<{ limit: pulumi.ComputedValue<number>, offset?: pulumi.ComputedValue<number>, period: pulumi.ComputedValue<string> }>[];
    /**
     * The [throttling limits](#throttling-settings-arguments) of the usage plan.
     */
    readonly throttleSettings?: pulumi.ComputedValue<{ burstLimit?: pulumi.ComputedValue<number>, rateLimit?: pulumi.ComputedValue<number> }>[];
}

