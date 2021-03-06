// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Inputs
{

    public sealed class ClusterKerberosAttributesGetArgs : Pulumi.ResourceArgs
    {
        [Input("adDomainJoinPassword")]
        public Input<string>? AdDomainJoinPassword { get; set; }

        [Input("adDomainJoinUser")]
        public Input<string>? AdDomainJoinUser { get; set; }

        [Input("crossRealmTrustPrincipalPassword")]
        public Input<string>? CrossRealmTrustPrincipalPassword { get; set; }

        [Input("kdcAdminPassword", required: true)]
        public Input<string> KdcAdminPassword { get; set; } = null!;

        [Input("realm", required: true)]
        public Input<string> Realm { get; set; } = null!;

        public ClusterKerberosAttributesGetArgs()
        {
        }
    }
}
