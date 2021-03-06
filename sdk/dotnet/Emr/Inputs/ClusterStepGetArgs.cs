// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Inputs
{

    public sealed class ClusterStepGetArgs : Pulumi.ResourceArgs
    {
        [Input("actionOnFailure", required: true)]
        public Input<string> ActionOnFailure { get; set; } = null!;

        [Input("hadoopJarStep", required: true)]
        public Input<Inputs.ClusterStepHadoopJarStepGetArgs> HadoopJarStep { get; set; } = null!;

        /// <summary>
        /// The name of the job flow
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        public ClusterStepGetArgs()
        {
        }
    }
}
