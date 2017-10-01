// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Manages status (recording / stopped) of an AWS Config Configuration Recorder.
 * 
 * ~> **Note:** Starting Configuration Recorder requires a [Delivery Channel](/docs/providers/aws/r/config_delivery_channel.html) to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.
 */
export class RecorderStatus extends pulumi.Resource {
    /**
     * Whether the configuration recorder should be enabled or disabled.
     */
    public readonly isEnabled: pulumi.Computed<boolean>;
    /**
     * The name of the recorder
     */
    public readonly name: pulumi.Computed<string>;

    /**
     * Create a RecorderStatus resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this RecorderStatus instance
     * @param args A collection of arguments for creating this RecorderStatus instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: RecorderStatusArgs, dependsOn?: pulumi.Resource[]) {
        if (args.isEnabled === undefined) {
            throw new Error("Missing required property 'isEnabled'");
        }
        super("aws:cfg/recorderStatus:RecorderStatus", urnName, {
            "isEnabled": args.isEnabled,
            "name": args.name,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a RecorderStatus resource.
 */
export interface RecorderStatusArgs {
    /**
     * Whether the configuration recorder should be enabled or disabled.
     */
    readonly isEnabled: pulumi.ComputedValue<boolean>;
    /**
     * The name of the recorder
     */
    readonly name?: pulumi.ComputedValue<string>;
}

