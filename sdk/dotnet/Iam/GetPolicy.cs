// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iam
{
    public static class GetPolicy
    {
        /// <summary>
        /// This data source can be used to fetch information about a specific
        /// IAM policy.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetPolicyResult> InvokeAsync(GetPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPolicyResult>("aws:iam/getPolicy:getPolicy", args ?? new GetPolicyArgs(), options.WithVersion());
    }


    public sealed class GetPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// ARN of the IAM policy.
        /// </summary>
        [Input("arn", required: true)]
        public string Arn { get; set; } = null!;

        public GetPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPolicyResult
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) specifying the policy.
        /// </summary>
        public readonly string Arn;
        /// <summary>
        /// The description of the policy.
        /// </summary>
        public readonly string Description;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the IAM policy.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The path to the policy.
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// The policy document of the policy.
        /// </summary>
        public readonly string Policy;

        [OutputConstructor]
        private GetPolicyResult(
            string arn,

            string description,

            string id,

            string name,

            string path,

            string policy)
        {
            Arn = arn;
            Description = description;
            Id = id;
            Name = name;
            Path = path;
            Policy = policy;
        }
    }
}
