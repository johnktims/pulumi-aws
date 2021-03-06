// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.RedShift
{
    public static class GetServiceAccount
    {
        /// <summary>
        /// Use this data source to get the Account ID of the [AWS Redshift Service Account](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
        /// in a given region for the purpose of allowing Redshift to store audit data in S3.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetServiceAccountResult> InvokeAsync(GetServiceAccountArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServiceAccountResult>("aws:redshift/getServiceAccount:getServiceAccount", args ?? new GetServiceAccountArgs(), options.WithVersion());
    }


    public sealed class GetServiceAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the region whose AWS Redshift account ID is desired.
        /// Defaults to the region from the AWS provider configuration.
        /// </summary>
        [Input("region")]
        public string? Region { get; set; }

        public GetServiceAccountArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServiceAccountResult
    {
        /// <summary>
        /// The ARN of the AWS Redshift service account in the selected region.
        /// </summary>
        public readonly string Arn;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string? Region;

        [OutputConstructor]
        private GetServiceAccountResult(
            string arn,

            string id,

            string? region)
        {
            Arn = arn;
            Id = id;
            Region = region;
        }
    }
}
