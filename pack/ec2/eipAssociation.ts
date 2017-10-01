// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an AWS EIP Association as a top level resource, to associate and
 * disassociate Elastic IPs from AWS Instances and Network Interfaces.
 * 
 * ~> **NOTE:** `aws_eip_association` is useful in scenarios where EIPs are either
 * pre-existing or distributed to customers or users and therefore cannot be changed.
 */
export class EipAssociation extends pulumi.Resource {
    /**
     * The allocation ID. This is required for EC2-VPC.
     */
    public readonly allocationId: pulumi.Computed<string>;
    /**
     * Whether to allow an Elastic IP to
     * be re-associated. Defaults to `true` in VPC.
     */
    public readonly allowReassociation?: pulumi.Computed<boolean>;
    /**
     * The ID of the instance. This is required for
     * EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
     * network interface ID, but not both. The operation fails if you specify an
     * instance ID unless exactly one network interface is attached.
     */
    public readonly instanceId: pulumi.Computed<string>;
    /**
     * The ID of the network interface. If the
     * instance has more than one network interface, you must specify a network
     * interface ID.
     */
    public readonly networkInterfaceId: pulumi.Computed<string>;
    /**
     * The primary or secondary private IP address
     * to associate with the Elastic IP address. If no private IP address is
     * specified, the Elastic IP address is associated with the primary private IP
     * address.
     */
    public readonly privateIpAddress: pulumi.Computed<string>;
    /**
     * The Elastic IP address. This is required for EC2-Classic.
     */
    public readonly publicIp: pulumi.Computed<string>;

    /**
     * Create a EipAssociation resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this EipAssociation instance
     * @param args A collection of arguments for creating this EipAssociation instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: EipAssociationArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:ec2/eipAssociation:EipAssociation", urnName, {
            "allocationId": args.allocationId,
            "allowReassociation": args.allowReassociation,
            "instanceId": args.instanceId,
            "networkInterfaceId": args.networkInterfaceId,
            "privateIpAddress": args.privateIpAddress,
            "publicIp": args.publicIp,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a EipAssociation resource.
 */
export interface EipAssociationArgs {
    /**
     * The allocation ID. This is required for EC2-VPC.
     */
    readonly allocationId?: pulumi.ComputedValue<string>;
    /**
     * Whether to allow an Elastic IP to
     * be re-associated. Defaults to `true` in VPC.
     */
    readonly allowReassociation?: pulumi.ComputedValue<boolean>;
    /**
     * The ID of the instance. This is required for
     * EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
     * network interface ID, but not both. The operation fails if you specify an
     * instance ID unless exactly one network interface is attached.
     */
    readonly instanceId?: pulumi.ComputedValue<string>;
    /**
     * The ID of the network interface. If the
     * instance has more than one network interface, you must specify a network
     * interface ID.
     */
    readonly networkInterfaceId?: pulumi.ComputedValue<string>;
    /**
     * The primary or secondary private IP address
     * to associate with the Elastic IP address. If no private IP address is
     * specified, the Elastic IP address is associated with the primary private IP
     * address.
     */
    readonly privateIpAddress?: pulumi.ComputedValue<string>;
    /**
     * The Elastic IP address. This is required for EC2-Classic.
     */
    readonly publicIp?: pulumi.ComputedValue<string>;
}

