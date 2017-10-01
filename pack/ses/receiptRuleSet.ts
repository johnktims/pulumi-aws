// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an SES receipt rule set resource
 */
export class ReceiptRuleSet extends pulumi.Resource {
    /**
     * The name of the rule set
     */
    public readonly ruleSetName: pulumi.Computed<string>;

    /**
     * Create a ReceiptRuleSet resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ReceiptRuleSet instance
     * @param args A collection of arguments for creating this ReceiptRuleSet instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: ReceiptRuleSetArgs, dependsOn?: pulumi.Resource[]) {
        if (args.ruleSetName === undefined) {
            throw new Error("Missing required property 'ruleSetName'");
        }
        super("aws:ses/receiptRuleSet:ReceiptRuleSet", urnName, {
            "ruleSetName": args.ruleSetName,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ReceiptRuleSet resource.
 */
export interface ReceiptRuleSetArgs {
    /**
     * The name of the rule set
     */
    readonly ruleSetName: pulumi.ComputedValue<string>;
}

