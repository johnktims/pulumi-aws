// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Outputs
{

    [OutputType]
    public sealed class ClusterEc2Attributes
    {
        public readonly string? AdditionalMasterSecurityGroups;
        public readonly string? AdditionalSlaveSecurityGroups;
        public readonly string? EmrManagedMasterSecurityGroup;
        public readonly string? EmrManagedSlaveSecurityGroup;
        public readonly string InstanceProfile;
        public readonly string? KeyName;
        public readonly string? ServiceAccessSecurityGroup;
        public readonly string? SubnetId;

        [OutputConstructor]
        private ClusterEc2Attributes(
            string? additionalMasterSecurityGroups,

            string? additionalSlaveSecurityGroups,

            string? emrManagedMasterSecurityGroup,

            string? emrManagedSlaveSecurityGroup,

            string instanceProfile,

            string? keyName,

            string? serviceAccessSecurityGroup,

            string? subnetId)
        {
            AdditionalMasterSecurityGroups = additionalMasterSecurityGroups;
            AdditionalSlaveSecurityGroups = additionalSlaveSecurityGroups;
            EmrManagedMasterSecurityGroup = emrManagedMasterSecurityGroup;
            EmrManagedSlaveSecurityGroup = emrManagedSlaveSecurityGroup;
            InstanceProfile = instanceProfile;
            KeyName = keyName;
            ServiceAccessSecurityGroup = serviceAccessSecurityGroup;
            SubnetId = subnetId;
        }
    }
}
