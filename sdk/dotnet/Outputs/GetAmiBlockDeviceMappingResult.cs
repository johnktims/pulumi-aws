// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Outputs
{

    [OutputType]
    public sealed class GetAmiBlockDeviceMappingResult
    {
        public readonly string DeviceName;
        public readonly ImmutableDictionary<string, object> Ebs;
        public readonly string NoDevice;
        public readonly string VirtualName;

        [OutputConstructor]
        private GetAmiBlockDeviceMappingResult(
            string deviceName,

            ImmutableDictionary<string, object> ebs,

            string noDevice,

            string virtualName)
        {
            DeviceName = deviceName;
            Ebs = ebs;
            NoDevice = noDevice;
            VirtualName = virtualName;
        }
    }
}
