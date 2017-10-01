// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a WAF XSS Match Set Resource
 */
export class XssMatchSet extends pulumi.Resource {
    /**
     * The name or description of the SizeConstraintSet.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    public readonly xssMatchTuples?: pulumi.Computed<{ fieldToMatch: { data?: string, type: string }[], textTransformation: string }[]>;

    /**
     * Create a XssMatchSet resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this XssMatchSet instance
     * @param args A collection of arguments for creating this XssMatchSet instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: XssMatchSetArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:waf/xssMatchSet:XssMatchSet", urnName, {
            "name": args.name,
            "xssMatchTuples": args.xssMatchTuples,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a XssMatchSet resource.
 */
export interface XssMatchSetArgs {
    /**
     * The name or description of the SizeConstraintSet.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    readonly xssMatchTuples?: pulumi.ComputedValue<{ fieldToMatch: pulumi.ComputedValue<{ data?: pulumi.ComputedValue<string>, type: pulumi.ComputedValue<string> }>[], textTransformation: pulumi.ComputedValue<string> }>[];
}

