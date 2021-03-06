// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudWatch.Outputs
{

    [OutputType]
    public sealed class EventTargetInputTransformer
    {
        /// <summary>
        /// Key value pairs specified in the form of JSONPath (for example, time = $.time)
        /// </summary>
        public readonly ImmutableDictionary<string, object>? InputPaths;
        /// <summary>
        /// Structure containing the template body.
        /// </summary>
        public readonly string InputTemplate;

        [OutputConstructor]
        private EventTargetInputTransformer(
            ImmutableDictionary<string, object>? inputPaths,

            string inputTemplate)
        {
            InputPaths = inputPaths;
            InputTemplate = inputTemplate;
        }
    }
}
