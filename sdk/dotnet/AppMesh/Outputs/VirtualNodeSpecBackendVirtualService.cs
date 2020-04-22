// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Outputs
{

    [OutputType]
    public sealed class VirtualNodeSpecBackendVirtualService
    {
        /// <summary>
        /// The name of the virtual service that is acting as a virtual node backend.
        /// </summary>
        public readonly string VirtualServiceName;

        [OutputConstructor]
        private VirtualNodeSpecBackendVirtualService(string virtualServiceName)
        {
            VirtualServiceName = virtualServiceName;
        }
    }
}