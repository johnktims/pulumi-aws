// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ses.Inputs
{

    public sealed class ReceiptRuleAddHeaderActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the header to add
        /// </summary>
        [Input("headerName", required: true)]
        public Input<string> HeaderName { get; set; } = null!;

        /// <summary>
        /// The value of the header to add
        /// </summary>
        [Input("headerValue", required: true)]
        public Input<string> HeaderValue { get; set; } = null!;

        /// <summary>
        /// The position of the action in the receipt rule
        /// </summary>
        [Input("position", required: true)]
        public Input<int> Position { get; set; } = null!;

        public ReceiptRuleAddHeaderActionArgs()
        {
        }
    }
}