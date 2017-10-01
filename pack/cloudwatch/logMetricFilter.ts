// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CloudWatch Log Metric Filter resource.
 */
export class LogMetricFilter extends pulumi.Resource {
    /**
     * The name of the log group to associate the metric filter with.
     */
    public readonly logGroupName: pulumi.Computed<string>;
    /**
     * A block defining collection of information
     * needed to define how metric data gets emitted. See below.
     */
    public readonly metricTransformation: pulumi.Computed<{ name: string, namespace: string, value: string }[]>;
    /**
     * The name of the CloudWatch metric to which the monitored log information should be published (e.g. `ErrorCount`)
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
     * for extracting metric data out of ingested log events.
     */
    public readonly pattern: pulumi.Computed<string>;

    /**
     * Create a LogMetricFilter resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this LogMetricFilter instance
     * @param args A collection of arguments for creating this LogMetricFilter instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: LogMetricFilterArgs, dependsOn?: pulumi.Resource[]) {
        if (args.logGroupName === undefined) {
            throw new Error("Missing required property 'logGroupName'");
        }
        if (args.metricTransformation === undefined) {
            throw new Error("Missing required property 'metricTransformation'");
        }
        if (args.pattern === undefined) {
            throw new Error("Missing required property 'pattern'");
        }
        super("aws:cloudwatch/logMetricFilter:LogMetricFilter", urnName, {
            "logGroupName": args.logGroupName,
            "metricTransformation": args.metricTransformation,
            "name": args.name,
            "pattern": args.pattern,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a LogMetricFilter resource.
 */
export interface LogMetricFilterArgs {
    /**
     * The name of the log group to associate the metric filter with.
     */
    readonly logGroupName: pulumi.ComputedValue<string>;
    /**
     * A block defining collection of information
     * needed to define how metric data gets emitted. See below.
     */
    readonly metricTransformation: pulumi.ComputedValue<{ name: pulumi.ComputedValue<string>, namespace: pulumi.ComputedValue<string>, value: pulumi.ComputedValue<string> }>[];
    /**
     * The name of the CloudWatch metric to which the monitored log information should be published (e.g. `ErrorCount`)
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
     * for extracting metric data out of ingested log events.
     */
    readonly pattern: pulumi.ComputedValue<string>;
}

