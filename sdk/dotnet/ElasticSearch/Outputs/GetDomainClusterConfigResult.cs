// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticSearch.Outputs
{

    [OutputType]
    public sealed class GetDomainClusterConfigResult
    {
        /// <summary>
        /// Number of dedicated master nodes in the cluster.
        /// </summary>
        public readonly int DedicatedMasterCount;
        /// <summary>
        /// Indicates whether dedicated master nodes are enabled for the cluster.
        /// </summary>
        public readonly bool DedicatedMasterEnabled;
        /// <summary>
        /// Instance type of the dedicated master nodes in the cluster.
        /// </summary>
        public readonly string DedicatedMasterType;
        /// <summary>
        /// Number of instances in the cluster.
        /// </summary>
        public readonly int InstanceCount;
        /// <summary>
        /// Instance type of data nodes in the cluster.
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// Configuration block containing zone awareness settings.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetDomainClusterConfigZoneAwarenessConfigResult> ZoneAwarenessConfigs;
        /// <summary>
        /// Indicates whether zone awareness is enabled.
        /// </summary>
        public readonly bool ZoneAwarenessEnabled;

        [OutputConstructor]
        private GetDomainClusterConfigResult(
            int dedicatedMasterCount,

            bool dedicatedMasterEnabled,

            string dedicatedMasterType,

            int instanceCount,

            string instanceType,

            ImmutableArray<Outputs.GetDomainClusterConfigZoneAwarenessConfigResult> zoneAwarenessConfigs,

            bool zoneAwarenessEnabled)
        {
            DedicatedMasterCount = dedicatedMasterCount;
            DedicatedMasterEnabled = dedicatedMasterEnabled;
            DedicatedMasterType = dedicatedMasterType;
            InstanceCount = instanceCount;
            InstanceType = instanceType;
            ZoneAwarenessConfigs = zoneAwarenessConfigs;
            ZoneAwarenessEnabled = zoneAwarenessEnabled;
        }
    }
}
