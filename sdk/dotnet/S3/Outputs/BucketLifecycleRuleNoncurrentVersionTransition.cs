// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class BucketLifecycleRuleNoncurrentVersionTransition
    {
        /// <summary>
        /// Specifies the number of days an object is noncurrent object versions expire.
        /// </summary>
        public readonly int? Days;
        /// <summary>
        /// Specifies the Amazon S3 storage class to which you want the noncurrent versions object to transition. Can be `ONEZONE_IA`, `STANDARD_IA`, `INTELLIGENT_TIERING`, `GLACIER`, or `DEEP_ARCHIVE`.
        /// </summary>
        public readonly string StorageClass;

        [OutputConstructor]
        private BucketLifecycleRuleNoncurrentVersionTransition(
            int? days,

            string storageClass)
        {
            Days = days;
            StorageClass = storageClass;
        }
    }
}
