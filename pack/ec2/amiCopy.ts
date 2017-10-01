// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * The "AMI copy" resource allows duplication of an Amazon Machine Image (AMI),
 * including cross-region copies.
 * 
 * If the source AMI has associated EBS snapshots, those will also be duplicated
 * along with the AMI.
 * 
 * This is useful for taking a single AMI provisioned in one region and making
 * it available in another for a multi-region deployment.
 * 
 * Copying an AMI can take several minutes. The creation of this resource will
 * block until the new AMI is available for use on new instances.
 */
export class AmiCopy extends pulumi.Resource {
    /**
     * Machine architecture for created instances. Defaults to "x86_64".
     */
    public /*out*/ readonly architecture: pulumi.Computed<string>;
    /**
     * A longer, human-readable description for the AMI.
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * Nested block describing an EBS block device that should be
     * attached to created instances. The structure of this block is described below.
     */
    public readonly ebsBlockDevice: pulumi.Computed<{ deleteOnTermination: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[]>;
    /**
     * Boolean controlling whether the created EBS volumes will be encrypted.
     */
    public readonly encrypted?: pulumi.Computed<boolean>;
    /**
     * Nested block describing an ephemeral block device that
     * should be attached to created instances. The structure of this block is described below.
     */
    public readonly ephemeralBlockDevice: pulumi.Computed<{ deviceName: string, virtualName: string }[]>;
    /**
     * The ID of the created AMI.
     */
    public /*out*/ readonly amiId: pulumi.Computed<string>;
    /**
     * Path to an S3 object containing an image manifest, e.g. created
     * by the `ec2-upload-bundle` command in the EC2 command line tools.
     */
    public /*out*/ readonly imageLocation: pulumi.Computed<string>;
    /**
     * The id of the kernel image (AKI) that will be used as the paravirtual
     * kernel in created instances.
     */
    public /*out*/ readonly kernelId: pulumi.Computed<string>;
    /**
     * The full ARN of the AWS Key Management Service (AWS KMS) CMK to use when encrypting the snapshots of
     * an image during a copy operation. This parameter is only required if you want to use a non-default CMK;
     * if this parameter is not specified, the default CMK for EBS is used
     */
    public readonly kmsKeyId: pulumi.Computed<string>;
    public /*out*/ readonly manageEbsSnapshots: pulumi.Computed<boolean>;
    /**
     * A region-unique name for the AMI.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The id of an initrd image (ARI) that will be used when booting the
     * created instances.
     */
    public /*out*/ readonly ramdiskId: pulumi.Computed<string>;
    public /*out*/ readonly rootDeviceName: pulumi.Computed<string>;
    /**
     * The id of the AMI to copy. This id must be valid in the region
     * given by `source_ami_region`.
     */
    public readonly sourceAmiId: pulumi.Computed<string>;
    /**
     * The region from which the AMI will be copied. This may be the
     * same as the AWS provider region in order to create a copy within the same region.
     */
    public readonly sourceAmiRegion: pulumi.Computed<string>;
    /**
     * When set to "simple" (the default), enables enhanced networking
     * for created instances. No other value is supported at this time.
     */
    public /*out*/ readonly sriovNetSupport: pulumi.Computed<string>;
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * Keyword to choose what virtualization mode created instances
     * will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
     * changes the set of further arguments that are required, as described below.
     */
    public /*out*/ readonly virtualizationType: pulumi.Computed<string>;

    /**
     * Create a AmiCopy resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this AmiCopy instance
     * @param args A collection of arguments for creating this AmiCopy instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: AmiCopyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.sourceAmiId === undefined) {
            throw new Error("Missing required property 'sourceAmiId'");
        }
        if (args.sourceAmiRegion === undefined) {
            throw new Error("Missing required property 'sourceAmiRegion'");
        }
        super("aws:ec2/amiCopy:AmiCopy", urnName, {
            "description": args.description,
            "ebsBlockDevice": args.ebsBlockDevice,
            "encrypted": args.encrypted,
            "ephemeralBlockDevice": args.ephemeralBlockDevice,
            "kmsKeyId": args.kmsKeyId,
            "name": args.name,
            "sourceAmiId": args.sourceAmiId,
            "sourceAmiRegion": args.sourceAmiRegion,
            "tags": args.tags,
            "architecture": undefined,
            "amiId": undefined,
            "imageLocation": undefined,
            "kernelId": undefined,
            "manageEbsSnapshots": undefined,
            "ramdiskId": undefined,
            "rootDeviceName": undefined,
            "sriovNetSupport": undefined,
            "virtualizationType": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a AmiCopy resource.
 */
export interface AmiCopyArgs {
    /**
     * A longer, human-readable description for the AMI.
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * Nested block describing an EBS block device that should be
     * attached to created instances. The structure of this block is described below.
     */
    readonly ebsBlockDevice?: pulumi.ComputedValue<{ deleteOnTermination?: pulumi.ComputedValue<boolean>, deviceName?: pulumi.ComputedValue<string>, encrypted?: pulumi.ComputedValue<boolean>, iops?: pulumi.ComputedValue<number>, snapshotId?: pulumi.ComputedValue<string>, volumeSize?: pulumi.ComputedValue<number>, volumeType?: pulumi.ComputedValue<string> }>[];
    /**
     * Boolean controlling whether the created EBS volumes will be encrypted.
     */
    readonly encrypted?: pulumi.ComputedValue<boolean>;
    /**
     * Nested block describing an ephemeral block device that
     * should be attached to created instances. The structure of this block is described below.
     */
    readonly ephemeralBlockDevice?: pulumi.ComputedValue<{ deviceName?: pulumi.ComputedValue<string>, virtualName?: pulumi.ComputedValue<string> }>[];
    /**
     * The full ARN of the AWS Key Management Service (AWS KMS) CMK to use when encrypting the snapshots of
     * an image during a copy operation. This parameter is only required if you want to use a non-default CMK;
     * if this parameter is not specified, the default CMK for EBS is used
     */
    readonly kmsKeyId?: pulumi.ComputedValue<string>;
    /**
     * A region-unique name for the AMI.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The id of the AMI to copy. This id must be valid in the region
     * given by `source_ami_region`.
     */
    readonly sourceAmiId: pulumi.ComputedValue<string>;
    /**
     * The region from which the AMI will be copied. This may be the
     * same as the AWS provider region in order to create a copy within the same region.
     */
    readonly sourceAmiRegion: pulumi.ComputedValue<string>;
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

