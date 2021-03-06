// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2TransitGateway
{
    public static class GetVpnAttachment
    {
        /// <summary>
        /// Get information on an EC2 Transit Gateway VPN Attachment.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetVpnAttachmentResult> InvokeAsync(GetVpnAttachmentArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVpnAttachmentResult>("aws:ec2transitgateway/getVpnAttachment:getVpnAttachment", args ?? new GetVpnAttachmentArgs(), options.WithVersion());
    }


    public sealed class GetVpnAttachmentArgs : Pulumi.InvokeArgs
    {
        [Input("filters")]
        private List<Inputs.GetVpnAttachmentFilterArgs>? _filters;

        /// <summary>
        /// Configuration block(s) for filtering. Detailed below.
        /// </summary>
        public List<Inputs.GetVpnAttachmentFilterArgs> Filters
        {
            get => _filters ?? (_filters = new List<Inputs.GetVpnAttachmentFilterArgs>());
            set => _filters = value;
        }

        [Input("tags")]
        private Dictionary<string, object>? _tags;

        /// <summary>
        /// A mapping of tags, each pair of which must exactly match a pair on the desired Transit Gateway VPN Attachment.
        /// </summary>
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        /// <summary>
        /// Identifier of the EC2 Transit Gateway.
        /// </summary>
        [Input("transitGatewayId")]
        public string? TransitGatewayId { get; set; }

        /// <summary>
        /// Identifier of the EC2 VPN Connection.
        /// </summary>
        [Input("vpnConnectionId")]
        public string? VpnConnectionId { get; set; }

        public GetVpnAttachmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVpnAttachmentResult
    {
        public readonly ImmutableArray<Outputs.GetVpnAttachmentFilterResult> Filters;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Key-value tags for the EC2 Transit Gateway VPN Attachment
        /// </summary>
        public readonly ImmutableDictionary<string, object> Tags;
        public readonly string? TransitGatewayId;
        public readonly string? VpnConnectionId;

        [OutputConstructor]
        private GetVpnAttachmentResult(
            ImmutableArray<Outputs.GetVpnAttachmentFilterResult> filters,

            string id,

            ImmutableDictionary<string, object> tags,

            string? transitGatewayId,

            string? vpnConnectionId)
        {
            Filters = filters;
            Id = id;
            Tags = tags;
            TransitGatewayId = transitGatewayId;
            VpnConnectionId = vpnConnectionId;
        }
    }
}
