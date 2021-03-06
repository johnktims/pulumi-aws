// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2transitgateway

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Get information on an EC2 Transit Gateway VPC Attachment.
func LookupVpcAttachment(ctx *pulumi.Context, args *LookupVpcAttachmentArgs, opts ...pulumi.InvokeOption) (*LookupVpcAttachmentResult, error) {
	var rv LookupVpcAttachmentResult
	err := ctx.Invoke("aws:ec2transitgateway/getVpcAttachment:getVpcAttachment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getVpcAttachment.
type LookupVpcAttachmentArgs struct {
	// One or more configuration blocks containing name-values filters. Detailed below.
	Filters []GetVpcAttachmentFilter `pulumi:"filters"`
	// Identifier of the EC2 Transit Gateway VPC Attachment.
	Id *string `pulumi:"id"`
	// Key-value tags for the EC2 Transit Gateway VPC Attachment
	Tags map[string]interface{} `pulumi:"tags"`
}

// A collection of values returned by getVpcAttachment.
type LookupVpcAttachmentResult struct {
	// Whether DNS support is enabled.
	DnsSupport string                   `pulumi:"dnsSupport"`
	Filters    []GetVpcAttachmentFilter `pulumi:"filters"`
	// EC2 Transit Gateway VPC Attachment identifier
	Id *string `pulumi:"id"`
	// Whether IPv6 support is enabled.
	Ipv6Support string `pulumi:"ipv6Support"`
	// Identifiers of EC2 Subnets.
	SubnetIds []string `pulumi:"subnetIds"`
	// Key-value tags for the EC2 Transit Gateway VPC Attachment
	Tags map[string]interface{} `pulumi:"tags"`
	// EC2 Transit Gateway identifier
	TransitGatewayId string `pulumi:"transitGatewayId"`
	// Identifier of EC2 VPC.
	VpcId string `pulumi:"vpcId"`
	// Identifier of the AWS account that owns the EC2 VPC.
	VpcOwnerId string `pulumi:"vpcOwnerId"`
}
