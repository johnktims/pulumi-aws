// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Creates a Snapshot of an EBS Volume.
 */
export class Snapshot extends pulumi.Resource {
    /**
     * The data encryption key identifier for the snapshot.
     */
    public /*out*/ readonly dataEncryptionKeyId: pulumi.Computed<string>;
    /**
     * A description of what the snapshot is.
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * Whether the snapshot is encrypted.
     */
    public /*out*/ readonly encrypted: pulumi.Computed<boolean>;
    /**
     * The ARN for the KMS encryption key.
     */
    public /*out*/ readonly kmsKeyId: pulumi.Computed<string>;
    /**
     * Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
     */
    public /*out*/ readonly ownerAlias: pulumi.Computed<string>;
    /**
     * The AWS account ID of the EBS snapshot owner.
     */
    public /*out*/ readonly ownerId: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the snapshot
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * The Volume ID of which to make a snapshot.
     */
    public readonly volumeId: pulumi.Computed<string>;
    /**
     * The size of the drive in GiBs.
     */
    public /*out*/ readonly volumeSize: pulumi.Computed<number>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Snapshot instance
     * @param args A collection of arguments for creating this Snapshot instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: SnapshotArgs, dependsOn?: pulumi.Resource[]) {
        if (args.volumeId === undefined) {
            throw new Error("Missing required property 'volumeId'");
        }
        super("aws:ebs/snapshot:Snapshot", urnName, {
            "description": args.description,
            "tags": args.tags,
            "volumeId": args.volumeId,
            "dataEncryptionKeyId": undefined,
            "encrypted": undefined,
            "kmsKeyId": undefined,
            "ownerAlias": undefined,
            "ownerId": undefined,
            "volumeSize": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * A description of what the snapshot is.
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the snapshot
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * The Volume ID of which to make a snapshot.
     */
    readonly volumeId: pulumi.ComputedValue<string>;
}

