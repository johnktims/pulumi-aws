// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apigateway

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a settings of an API Gateway Account. Settings is applied region-wide per `provider` block.
// 
// -> **Note:** As there is no API method for deleting account settings or resetting it to defaults, destroying this resource will keep your account settings intact
type Account struct {
	s *pulumi.ResourceState
}

// NewAccount registers a new resource with the given unique name, arguments, and options.
func NewAccount(ctx *pulumi.Context,
	name string, args *AccountArgs, opts ...pulumi.ResourceOpt) (*Account, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["cloudwatchRoleArn"] = nil
	} else {
		inputs["cloudwatchRoleArn"] = args.CloudwatchRoleArn
	}
	inputs["throttleSettings"] = nil
	s, err := ctx.RegisterResource("aws:apigateway/account:Account", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// GetAccount gets an existing Account resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccount(ctx *pulumi.Context,
	name string, id pulumi.ID, state *AccountState, opts ...pulumi.ResourceOpt) (*Account, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["cloudwatchRoleArn"] = state.CloudwatchRoleArn
		inputs["throttleSettings"] = state.ThrottleSettings
	}
	s, err := ctx.ReadResource("aws:apigateway/account:Account", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Account) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Account) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
// See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
// Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
func (r *Account) CloudwatchRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cloudwatchRoleArn"])
}

// Account-Level throttle settings. See exported fields below.
func (r *Account) ThrottleSettings() *pulumi.Output {
	return r.s.State["throttleSettings"]
}

// Input properties used for looking up and filtering Account resources.
type AccountState struct {
	// The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
	// See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
	// Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
	CloudwatchRoleArn interface{}
	// Account-Level throttle settings. See exported fields below.
	ThrottleSettings interface{}
}

// The set of arguments for constructing a Account resource.
type AccountArgs struct {
	// The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
	// See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
	// Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
	CloudwatchRoleArn interface{}
}