// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppSync.Outputs
{

    [OutputType]
    public sealed class GraphQLApiAdditionalAuthenticationProvider
    {
        /// <summary>
        /// The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
        /// </summary>
        public readonly string AuthenticationType;
        /// <summary>
        /// Nested argument containing OpenID Connect configuration. Defined below.
        /// </summary>
        public readonly Outputs.GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig? OpenidConnectConfig;
        /// <summary>
        /// The Amazon Cognito User Pool configuration. Defined below.
        /// </summary>
        public readonly Outputs.GraphQLApiAdditionalAuthenticationProviderUserPoolConfig? UserPoolConfig;

        [OutputConstructor]
        private GraphQLApiAdditionalAuthenticationProvider(
            string authenticationType,

            Outputs.GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig? openidConnectConfig,

            Outputs.GraphQLApiAdditionalAuthenticationProviderUserPoolConfig? userPoolConfig)
        {
            AuthenticationType = authenticationType;
            OpenidConnectConfig = openidConnectConfig;
            UserPoolConfig = userPoolConfig;
        }
    }
}
