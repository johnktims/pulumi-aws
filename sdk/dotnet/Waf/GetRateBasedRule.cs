// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf
{
    public static class GetRateBasedRule
    {
        /// <summary>
        /// `aws.waf.RateBasedRule` Retrieves a WAF Rate Based Rule Resource Id.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetRateBasedRuleResult> InvokeAsync(GetRateBasedRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRateBasedRuleResult>("aws:waf/getRateBasedRule:getRateBasedRule", args ?? new GetRateBasedRuleArgs(), options.WithVersion());
    }


    public sealed class GetRateBasedRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the WAF rate based rule.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        public GetRateBasedRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRateBasedRuleResult
    {
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;

        [OutputConstructor]
        private GetRateBasedRuleResult(
            string id,

            string name)
        {
            Id = id;
            Name = name;
        }
    }
}
