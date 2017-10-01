// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a resource to manage AWS Device Farm Projects. 
 * Please keep in mind that this feature is only supported on the "us-west-2" region.
 * This resource will error if you try to create a project in another region.
 * 
 * For more information about Device Farm Projects, see the AWS Documentation on
 * [Device Farm Projects][aws-get-project].
 */
export class Project extends pulumi.Resource {
    /**
     * The Amazon Resource Name of this project
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * The name of the project
     */
    public readonly name: pulumi.Computed<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Project instance
     * @param args A collection of arguments for creating this Project instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: ProjectArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:devicefarm/project:Project", urnName, {
            "name": args.name,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * The name of the project
     */
    readonly name?: pulumi.ComputedValue<string>;
}

