// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package elb

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type LoadBalancerAccessLogs struct {
	// The S3 bucket name to store the logs in.
	Bucket string `pulumi:"bucket"`
	// The S3 bucket prefix. Logs are stored in the root if not configured.
	BucketPrefix *string `pulumi:"bucketPrefix"`
	// Boolean to enable / disable `accessLogs`. Default is `true`
	Enabled *bool `pulumi:"enabled"`
	// The interval between checks.
	Interval *int `pulumi:"interval"`
}

type LoadBalancerAccessLogsInput interface {
	pulumi.Input

	ToLoadBalancerAccessLogsOutput() LoadBalancerAccessLogsOutput
	ToLoadBalancerAccessLogsOutputWithContext(context.Context) LoadBalancerAccessLogsOutput
}

type LoadBalancerAccessLogsArgs struct {
	// The S3 bucket name to store the logs in.
	Bucket pulumi.StringInput `pulumi:"bucket"`
	// The S3 bucket prefix. Logs are stored in the root if not configured.
	BucketPrefix pulumi.StringPtrInput `pulumi:"bucketPrefix"`
	// Boolean to enable / disable `accessLogs`. Default is `true`
	Enabled pulumi.BoolPtrInput `pulumi:"enabled"`
	// The interval between checks.
	Interval pulumi.IntPtrInput `pulumi:"interval"`
}

func (LoadBalancerAccessLogsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerAccessLogs)(nil)).Elem()
}

func (i LoadBalancerAccessLogsArgs) ToLoadBalancerAccessLogsOutput() LoadBalancerAccessLogsOutput {
	return i.ToLoadBalancerAccessLogsOutputWithContext(context.Background())
}

func (i LoadBalancerAccessLogsArgs) ToLoadBalancerAccessLogsOutputWithContext(ctx context.Context) LoadBalancerAccessLogsOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerAccessLogsOutput)
}

func (i LoadBalancerAccessLogsArgs) ToLoadBalancerAccessLogsPtrOutput() LoadBalancerAccessLogsPtrOutput {
	return i.ToLoadBalancerAccessLogsPtrOutputWithContext(context.Background())
}

func (i LoadBalancerAccessLogsArgs) ToLoadBalancerAccessLogsPtrOutputWithContext(ctx context.Context) LoadBalancerAccessLogsPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerAccessLogsOutput).ToLoadBalancerAccessLogsPtrOutputWithContext(ctx)
}

type LoadBalancerAccessLogsPtrInput interface {
	pulumi.Input

	ToLoadBalancerAccessLogsPtrOutput() LoadBalancerAccessLogsPtrOutput
	ToLoadBalancerAccessLogsPtrOutputWithContext(context.Context) LoadBalancerAccessLogsPtrOutput
}

type loadBalancerAccessLogsPtrType LoadBalancerAccessLogsArgs

func LoadBalancerAccessLogsPtr(v *LoadBalancerAccessLogsArgs) LoadBalancerAccessLogsPtrInput {	return (*loadBalancerAccessLogsPtrType)(v)
}

func (*loadBalancerAccessLogsPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**LoadBalancerAccessLogs)(nil)).Elem()
}

func (i *loadBalancerAccessLogsPtrType) ToLoadBalancerAccessLogsPtrOutput() LoadBalancerAccessLogsPtrOutput {
	return i.ToLoadBalancerAccessLogsPtrOutputWithContext(context.Background())
}

func (i *loadBalancerAccessLogsPtrType) ToLoadBalancerAccessLogsPtrOutputWithContext(ctx context.Context) LoadBalancerAccessLogsPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerAccessLogsPtrOutput)
}

type LoadBalancerAccessLogsOutput struct { *pulumi.OutputState }

func (LoadBalancerAccessLogsOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerAccessLogs)(nil)).Elem()
}

func (o LoadBalancerAccessLogsOutput) ToLoadBalancerAccessLogsOutput() LoadBalancerAccessLogsOutput {
	return o
}

func (o LoadBalancerAccessLogsOutput) ToLoadBalancerAccessLogsOutputWithContext(ctx context.Context) LoadBalancerAccessLogsOutput {
	return o
}

func (o LoadBalancerAccessLogsOutput) ToLoadBalancerAccessLogsPtrOutput() LoadBalancerAccessLogsPtrOutput {
	return o.ToLoadBalancerAccessLogsPtrOutputWithContext(context.Background())
}

func (o LoadBalancerAccessLogsOutput) ToLoadBalancerAccessLogsPtrOutputWithContext(ctx context.Context) LoadBalancerAccessLogsPtrOutput {
	return o.ApplyT(func(v LoadBalancerAccessLogs) *LoadBalancerAccessLogs {
		return &v
	}).(LoadBalancerAccessLogsPtrOutput)
}
// The S3 bucket name to store the logs in.
func (o LoadBalancerAccessLogsOutput) Bucket() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) string { return v.Bucket }).(pulumi.StringOutput)
}

// The S3 bucket prefix. Logs are stored in the root if not configured.
func (o LoadBalancerAccessLogsOutput) BucketPrefix() pulumi.StringPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *string { return v.BucketPrefix }).(pulumi.StringPtrOutput)
}

// Boolean to enable / disable `accessLogs`. Default is `true`
func (o LoadBalancerAccessLogsOutput) Enabled() pulumi.BoolPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *bool { return v.Enabled }).(pulumi.BoolPtrOutput)
}

// The interval between checks.
func (o LoadBalancerAccessLogsOutput) Interval() pulumi.IntPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *int { return v.Interval }).(pulumi.IntPtrOutput)
}

type LoadBalancerAccessLogsPtrOutput struct { *pulumi.OutputState}

func (LoadBalancerAccessLogsPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**LoadBalancerAccessLogs)(nil)).Elem()
}

func (o LoadBalancerAccessLogsPtrOutput) ToLoadBalancerAccessLogsPtrOutput() LoadBalancerAccessLogsPtrOutput {
	return o
}

func (o LoadBalancerAccessLogsPtrOutput) ToLoadBalancerAccessLogsPtrOutputWithContext(ctx context.Context) LoadBalancerAccessLogsPtrOutput {
	return o
}

func (o LoadBalancerAccessLogsPtrOutput) Elem() LoadBalancerAccessLogsOutput {
	return o.ApplyT(func (v *LoadBalancerAccessLogs) LoadBalancerAccessLogs { return *v }).(LoadBalancerAccessLogsOutput)
}

// The S3 bucket name to store the logs in.
func (o LoadBalancerAccessLogsPtrOutput) Bucket() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) string { return v.Bucket }).(pulumi.StringOutput)
}

// The S3 bucket prefix. Logs are stored in the root if not configured.
func (o LoadBalancerAccessLogsPtrOutput) BucketPrefix() pulumi.StringPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *string { return v.BucketPrefix }).(pulumi.StringPtrOutput)
}

// Boolean to enable / disable `accessLogs`. Default is `true`
func (o LoadBalancerAccessLogsPtrOutput) Enabled() pulumi.BoolPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *bool { return v.Enabled }).(pulumi.BoolPtrOutput)
}

// The interval between checks.
func (o LoadBalancerAccessLogsPtrOutput) Interval() pulumi.IntPtrOutput {
	return o.ApplyT(func (v LoadBalancerAccessLogs) *int { return v.Interval }).(pulumi.IntPtrOutput)
}

type LoadBalancerHealthCheck struct {
	// The number of checks before the instance is declared healthy.
	HealthyThreshold int `pulumi:"healthyThreshold"`
	// The interval between checks.
	Interval int `pulumi:"interval"`
	// The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL
	// values are:
	// * `HTTP`, `HTTPS` - PORT and PATH are required
	// * `TCP`, `SSL` - PORT is required, PATH is not supported
	Target string `pulumi:"target"`
	// The length of time before the check times out.
	Timeout int `pulumi:"timeout"`
	// The number of checks before the instance is declared unhealthy.
	UnhealthyThreshold int `pulumi:"unhealthyThreshold"`
}

type LoadBalancerHealthCheckInput interface {
	pulumi.Input

	ToLoadBalancerHealthCheckOutput() LoadBalancerHealthCheckOutput
	ToLoadBalancerHealthCheckOutputWithContext(context.Context) LoadBalancerHealthCheckOutput
}

type LoadBalancerHealthCheckArgs struct {
	// The number of checks before the instance is declared healthy.
	HealthyThreshold pulumi.IntInput `pulumi:"healthyThreshold"`
	// The interval between checks.
	Interval pulumi.IntInput `pulumi:"interval"`
	// The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL
	// values are:
	// * `HTTP`, `HTTPS` - PORT and PATH are required
	// * `TCP`, `SSL` - PORT is required, PATH is not supported
	Target pulumi.StringInput `pulumi:"target"`
	// The length of time before the check times out.
	Timeout pulumi.IntInput `pulumi:"timeout"`
	// The number of checks before the instance is declared unhealthy.
	UnhealthyThreshold pulumi.IntInput `pulumi:"unhealthyThreshold"`
}

func (LoadBalancerHealthCheckArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerHealthCheck)(nil)).Elem()
}

func (i LoadBalancerHealthCheckArgs) ToLoadBalancerHealthCheckOutput() LoadBalancerHealthCheckOutput {
	return i.ToLoadBalancerHealthCheckOutputWithContext(context.Background())
}

func (i LoadBalancerHealthCheckArgs) ToLoadBalancerHealthCheckOutputWithContext(ctx context.Context) LoadBalancerHealthCheckOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerHealthCheckOutput)
}

func (i LoadBalancerHealthCheckArgs) ToLoadBalancerHealthCheckPtrOutput() LoadBalancerHealthCheckPtrOutput {
	return i.ToLoadBalancerHealthCheckPtrOutputWithContext(context.Background())
}

func (i LoadBalancerHealthCheckArgs) ToLoadBalancerHealthCheckPtrOutputWithContext(ctx context.Context) LoadBalancerHealthCheckPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerHealthCheckOutput).ToLoadBalancerHealthCheckPtrOutputWithContext(ctx)
}

type LoadBalancerHealthCheckPtrInput interface {
	pulumi.Input

	ToLoadBalancerHealthCheckPtrOutput() LoadBalancerHealthCheckPtrOutput
	ToLoadBalancerHealthCheckPtrOutputWithContext(context.Context) LoadBalancerHealthCheckPtrOutput
}

type loadBalancerHealthCheckPtrType LoadBalancerHealthCheckArgs

func LoadBalancerHealthCheckPtr(v *LoadBalancerHealthCheckArgs) LoadBalancerHealthCheckPtrInput {	return (*loadBalancerHealthCheckPtrType)(v)
}

func (*loadBalancerHealthCheckPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**LoadBalancerHealthCheck)(nil)).Elem()
}

func (i *loadBalancerHealthCheckPtrType) ToLoadBalancerHealthCheckPtrOutput() LoadBalancerHealthCheckPtrOutput {
	return i.ToLoadBalancerHealthCheckPtrOutputWithContext(context.Background())
}

func (i *loadBalancerHealthCheckPtrType) ToLoadBalancerHealthCheckPtrOutputWithContext(ctx context.Context) LoadBalancerHealthCheckPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerHealthCheckPtrOutput)
}

type LoadBalancerHealthCheckOutput struct { *pulumi.OutputState }

func (LoadBalancerHealthCheckOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerHealthCheck)(nil)).Elem()
}

func (o LoadBalancerHealthCheckOutput) ToLoadBalancerHealthCheckOutput() LoadBalancerHealthCheckOutput {
	return o
}

func (o LoadBalancerHealthCheckOutput) ToLoadBalancerHealthCheckOutputWithContext(ctx context.Context) LoadBalancerHealthCheckOutput {
	return o
}

func (o LoadBalancerHealthCheckOutput) ToLoadBalancerHealthCheckPtrOutput() LoadBalancerHealthCheckPtrOutput {
	return o.ToLoadBalancerHealthCheckPtrOutputWithContext(context.Background())
}

func (o LoadBalancerHealthCheckOutput) ToLoadBalancerHealthCheckPtrOutputWithContext(ctx context.Context) LoadBalancerHealthCheckPtrOutput {
	return o.ApplyT(func(v LoadBalancerHealthCheck) *LoadBalancerHealthCheck {
		return &v
	}).(LoadBalancerHealthCheckPtrOutput)
}
// The number of checks before the instance is declared healthy.
func (o LoadBalancerHealthCheckOutput) HealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.HealthyThreshold }).(pulumi.IntOutput)
}

// The interval between checks.
func (o LoadBalancerHealthCheckOutput) Interval() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.Interval }).(pulumi.IntOutput)
}

// The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL
// values are:
// * `HTTP`, `HTTPS` - PORT and PATH are required
// * `TCP`, `SSL` - PORT is required, PATH is not supported
func (o LoadBalancerHealthCheckOutput) Target() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) string { return v.Target }).(pulumi.StringOutput)
}

// The length of time before the check times out.
func (o LoadBalancerHealthCheckOutput) Timeout() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.Timeout }).(pulumi.IntOutput)
}

// The number of checks before the instance is declared unhealthy.
func (o LoadBalancerHealthCheckOutput) UnhealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.UnhealthyThreshold }).(pulumi.IntOutput)
}

type LoadBalancerHealthCheckPtrOutput struct { *pulumi.OutputState}

func (LoadBalancerHealthCheckPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**LoadBalancerHealthCheck)(nil)).Elem()
}

func (o LoadBalancerHealthCheckPtrOutput) ToLoadBalancerHealthCheckPtrOutput() LoadBalancerHealthCheckPtrOutput {
	return o
}

func (o LoadBalancerHealthCheckPtrOutput) ToLoadBalancerHealthCheckPtrOutputWithContext(ctx context.Context) LoadBalancerHealthCheckPtrOutput {
	return o
}

func (o LoadBalancerHealthCheckPtrOutput) Elem() LoadBalancerHealthCheckOutput {
	return o.ApplyT(func (v *LoadBalancerHealthCheck) LoadBalancerHealthCheck { return *v }).(LoadBalancerHealthCheckOutput)
}

// The number of checks before the instance is declared healthy.
func (o LoadBalancerHealthCheckPtrOutput) HealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.HealthyThreshold }).(pulumi.IntOutput)
}

// The interval between checks.
func (o LoadBalancerHealthCheckPtrOutput) Interval() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.Interval }).(pulumi.IntOutput)
}

// The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL
// values are:
// * `HTTP`, `HTTPS` - PORT and PATH are required
// * `TCP`, `SSL` - PORT is required, PATH is not supported
func (o LoadBalancerHealthCheckPtrOutput) Target() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) string { return v.Target }).(pulumi.StringOutput)
}

// The length of time before the check times out.
func (o LoadBalancerHealthCheckPtrOutput) Timeout() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.Timeout }).(pulumi.IntOutput)
}

// The number of checks before the instance is declared unhealthy.
func (o LoadBalancerHealthCheckPtrOutput) UnhealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerHealthCheck) int { return v.UnhealthyThreshold }).(pulumi.IntOutput)
}

type LoadBalancerListener struct {
	// The port on the instance to route to
	InstancePort int `pulumi:"instancePort"`
	// The protocol to use to the instance. Valid
	// values are `HTTP`, `HTTPS`, `TCP`, or `SSL`
	InstanceProtocol string `pulumi:"instanceProtocol"`
	// The port to listen on for the load balancer
	LbPort int `pulumi:"lbPort"`
	// The protocol to listen on. Valid values are `HTTP`,
	// `HTTPS`, `TCP`, or `SSL`
	LbProtocol string `pulumi:"lbProtocol"`
	// The ARN of an SSL certificate you have
	// uploaded to AWS IAM. **Note ECDSA-specific restrictions below.  Only valid when `lbProtocol` is either HTTPS or SSL**
	SslCertificateId *string `pulumi:"sslCertificateId"`
}

type LoadBalancerListenerInput interface {
	pulumi.Input

	ToLoadBalancerListenerOutput() LoadBalancerListenerOutput
	ToLoadBalancerListenerOutputWithContext(context.Context) LoadBalancerListenerOutput
}

type LoadBalancerListenerArgs struct {
	// The port on the instance to route to
	InstancePort pulumi.IntInput `pulumi:"instancePort"`
	// The protocol to use to the instance. Valid
	// values are `HTTP`, `HTTPS`, `TCP`, or `SSL`
	InstanceProtocol pulumi.StringInput `pulumi:"instanceProtocol"`
	// The port to listen on for the load balancer
	LbPort pulumi.IntInput `pulumi:"lbPort"`
	// The protocol to listen on. Valid values are `HTTP`,
	// `HTTPS`, `TCP`, or `SSL`
	LbProtocol pulumi.StringInput `pulumi:"lbProtocol"`
	// The ARN of an SSL certificate you have
	// uploaded to AWS IAM. **Note ECDSA-specific restrictions below.  Only valid when `lbProtocol` is either HTTPS or SSL**
	SslCertificateId pulumi.StringPtrInput `pulumi:"sslCertificateId"`
}

func (LoadBalancerListenerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerListener)(nil)).Elem()
}

func (i LoadBalancerListenerArgs) ToLoadBalancerListenerOutput() LoadBalancerListenerOutput {
	return i.ToLoadBalancerListenerOutputWithContext(context.Background())
}

func (i LoadBalancerListenerArgs) ToLoadBalancerListenerOutputWithContext(ctx context.Context) LoadBalancerListenerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerListenerOutput)
}

type LoadBalancerListenerArrayInput interface {
	pulumi.Input

	ToLoadBalancerListenerArrayOutput() LoadBalancerListenerArrayOutput
	ToLoadBalancerListenerArrayOutputWithContext(context.Context) LoadBalancerListenerArrayOutput
}

type LoadBalancerListenerArray []LoadBalancerListenerInput

func (LoadBalancerListenerArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]LoadBalancerListener)(nil)).Elem()
}

func (i LoadBalancerListenerArray) ToLoadBalancerListenerArrayOutput() LoadBalancerListenerArrayOutput {
	return i.ToLoadBalancerListenerArrayOutputWithContext(context.Background())
}

func (i LoadBalancerListenerArray) ToLoadBalancerListenerArrayOutputWithContext(ctx context.Context) LoadBalancerListenerArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerListenerArrayOutput)
}

type LoadBalancerListenerOutput struct { *pulumi.OutputState }

func (LoadBalancerListenerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerListener)(nil)).Elem()
}

func (o LoadBalancerListenerOutput) ToLoadBalancerListenerOutput() LoadBalancerListenerOutput {
	return o
}

func (o LoadBalancerListenerOutput) ToLoadBalancerListenerOutputWithContext(ctx context.Context) LoadBalancerListenerOutput {
	return o
}

// The port on the instance to route to
func (o LoadBalancerListenerOutput) InstancePort() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerListener) int { return v.InstancePort }).(pulumi.IntOutput)
}

// The protocol to use to the instance. Valid
// values are `HTTP`, `HTTPS`, `TCP`, or `SSL`
func (o LoadBalancerListenerOutput) InstanceProtocol() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerListener) string { return v.InstanceProtocol }).(pulumi.StringOutput)
}

// The port to listen on for the load balancer
func (o LoadBalancerListenerOutput) LbPort() pulumi.IntOutput {
	return o.ApplyT(func (v LoadBalancerListener) int { return v.LbPort }).(pulumi.IntOutput)
}

// The protocol to listen on. Valid values are `HTTP`,
// `HTTPS`, `TCP`, or `SSL`
func (o LoadBalancerListenerOutput) LbProtocol() pulumi.StringOutput {
	return o.ApplyT(func (v LoadBalancerListener) string { return v.LbProtocol }).(pulumi.StringOutput)
}

// The ARN of an SSL certificate you have
// uploaded to AWS IAM. **Note ECDSA-specific restrictions below.  Only valid when `lbProtocol` is either HTTPS or SSL**
func (o LoadBalancerListenerOutput) SslCertificateId() pulumi.StringPtrOutput {
	return o.ApplyT(func (v LoadBalancerListener) *string { return v.SslCertificateId }).(pulumi.StringPtrOutput)
}

type LoadBalancerListenerArrayOutput struct { *pulumi.OutputState}

func (LoadBalancerListenerArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]LoadBalancerListener)(nil)).Elem()
}

func (o LoadBalancerListenerArrayOutput) ToLoadBalancerListenerArrayOutput() LoadBalancerListenerArrayOutput {
	return o
}

func (o LoadBalancerListenerArrayOutput) ToLoadBalancerListenerArrayOutputWithContext(ctx context.Context) LoadBalancerListenerArrayOutput {
	return o
}

func (o LoadBalancerListenerArrayOutput) Index(i pulumi.IntInput) LoadBalancerListenerOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) LoadBalancerListener {
		return vs[0].([]LoadBalancerListener)[vs[1].(int)]
	}).(LoadBalancerListenerOutput)
}

type LoadBalancerPolicyPolicyAttribute struct {
	Name *string `pulumi:"name"`
	Value *string `pulumi:"value"`
}

type LoadBalancerPolicyPolicyAttributeInput interface {
	pulumi.Input

	ToLoadBalancerPolicyPolicyAttributeOutput() LoadBalancerPolicyPolicyAttributeOutput
	ToLoadBalancerPolicyPolicyAttributeOutputWithContext(context.Context) LoadBalancerPolicyPolicyAttributeOutput
}

type LoadBalancerPolicyPolicyAttributeArgs struct {
	Name pulumi.StringPtrInput `pulumi:"name"`
	Value pulumi.StringPtrInput `pulumi:"value"`
}

func (LoadBalancerPolicyPolicyAttributeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerPolicyPolicyAttribute)(nil)).Elem()
}

func (i LoadBalancerPolicyPolicyAttributeArgs) ToLoadBalancerPolicyPolicyAttributeOutput() LoadBalancerPolicyPolicyAttributeOutput {
	return i.ToLoadBalancerPolicyPolicyAttributeOutputWithContext(context.Background())
}

func (i LoadBalancerPolicyPolicyAttributeArgs) ToLoadBalancerPolicyPolicyAttributeOutputWithContext(ctx context.Context) LoadBalancerPolicyPolicyAttributeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerPolicyPolicyAttributeOutput)
}

type LoadBalancerPolicyPolicyAttributeArrayInput interface {
	pulumi.Input

	ToLoadBalancerPolicyPolicyAttributeArrayOutput() LoadBalancerPolicyPolicyAttributeArrayOutput
	ToLoadBalancerPolicyPolicyAttributeArrayOutputWithContext(context.Context) LoadBalancerPolicyPolicyAttributeArrayOutput
}

type LoadBalancerPolicyPolicyAttributeArray []LoadBalancerPolicyPolicyAttributeInput

func (LoadBalancerPolicyPolicyAttributeArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]LoadBalancerPolicyPolicyAttribute)(nil)).Elem()
}

func (i LoadBalancerPolicyPolicyAttributeArray) ToLoadBalancerPolicyPolicyAttributeArrayOutput() LoadBalancerPolicyPolicyAttributeArrayOutput {
	return i.ToLoadBalancerPolicyPolicyAttributeArrayOutputWithContext(context.Background())
}

func (i LoadBalancerPolicyPolicyAttributeArray) ToLoadBalancerPolicyPolicyAttributeArrayOutputWithContext(ctx context.Context) LoadBalancerPolicyPolicyAttributeArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerPolicyPolicyAttributeArrayOutput)
}

type LoadBalancerPolicyPolicyAttributeOutput struct { *pulumi.OutputState }

func (LoadBalancerPolicyPolicyAttributeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerPolicyPolicyAttribute)(nil)).Elem()
}

func (o LoadBalancerPolicyPolicyAttributeOutput) ToLoadBalancerPolicyPolicyAttributeOutput() LoadBalancerPolicyPolicyAttributeOutput {
	return o
}

func (o LoadBalancerPolicyPolicyAttributeOutput) ToLoadBalancerPolicyPolicyAttributeOutputWithContext(ctx context.Context) LoadBalancerPolicyPolicyAttributeOutput {
	return o
}

func (o LoadBalancerPolicyPolicyAttributeOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func (v LoadBalancerPolicyPolicyAttribute) *string { return v.Name }).(pulumi.StringPtrOutput)
}

func (o LoadBalancerPolicyPolicyAttributeOutput) Value() pulumi.StringPtrOutput {
	return o.ApplyT(func (v LoadBalancerPolicyPolicyAttribute) *string { return v.Value }).(pulumi.StringPtrOutput)
}

type LoadBalancerPolicyPolicyAttributeArrayOutput struct { *pulumi.OutputState}

func (LoadBalancerPolicyPolicyAttributeArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]LoadBalancerPolicyPolicyAttribute)(nil)).Elem()
}

func (o LoadBalancerPolicyPolicyAttributeArrayOutput) ToLoadBalancerPolicyPolicyAttributeArrayOutput() LoadBalancerPolicyPolicyAttributeArrayOutput {
	return o
}

func (o LoadBalancerPolicyPolicyAttributeArrayOutput) ToLoadBalancerPolicyPolicyAttributeArrayOutputWithContext(ctx context.Context) LoadBalancerPolicyPolicyAttributeArrayOutput {
	return o
}

func (o LoadBalancerPolicyPolicyAttributeArrayOutput) Index(i pulumi.IntInput) LoadBalancerPolicyPolicyAttributeOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) LoadBalancerPolicyPolicyAttribute {
		return vs[0].([]LoadBalancerPolicyPolicyAttribute)[vs[1].(int)]
	}).(LoadBalancerPolicyPolicyAttributeOutput)
}

type SslNegotiationPolicyAttribute struct {
	// The name of the attribute
	Name string `pulumi:"name"`
	// The value of the attribute
	Value string `pulumi:"value"`
}

type SslNegotiationPolicyAttributeInput interface {
	pulumi.Input

	ToSslNegotiationPolicyAttributeOutput() SslNegotiationPolicyAttributeOutput
	ToSslNegotiationPolicyAttributeOutputWithContext(context.Context) SslNegotiationPolicyAttributeOutput
}

type SslNegotiationPolicyAttributeArgs struct {
	// The name of the attribute
	Name pulumi.StringInput `pulumi:"name"`
	// The value of the attribute
	Value pulumi.StringInput `pulumi:"value"`
}

func (SslNegotiationPolicyAttributeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*SslNegotiationPolicyAttribute)(nil)).Elem()
}

func (i SslNegotiationPolicyAttributeArgs) ToSslNegotiationPolicyAttributeOutput() SslNegotiationPolicyAttributeOutput {
	return i.ToSslNegotiationPolicyAttributeOutputWithContext(context.Background())
}

func (i SslNegotiationPolicyAttributeArgs) ToSslNegotiationPolicyAttributeOutputWithContext(ctx context.Context) SslNegotiationPolicyAttributeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SslNegotiationPolicyAttributeOutput)
}

type SslNegotiationPolicyAttributeArrayInput interface {
	pulumi.Input

	ToSslNegotiationPolicyAttributeArrayOutput() SslNegotiationPolicyAttributeArrayOutput
	ToSslNegotiationPolicyAttributeArrayOutputWithContext(context.Context) SslNegotiationPolicyAttributeArrayOutput
}

type SslNegotiationPolicyAttributeArray []SslNegotiationPolicyAttributeInput

func (SslNegotiationPolicyAttributeArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]SslNegotiationPolicyAttribute)(nil)).Elem()
}

func (i SslNegotiationPolicyAttributeArray) ToSslNegotiationPolicyAttributeArrayOutput() SslNegotiationPolicyAttributeArrayOutput {
	return i.ToSslNegotiationPolicyAttributeArrayOutputWithContext(context.Background())
}

func (i SslNegotiationPolicyAttributeArray) ToSslNegotiationPolicyAttributeArrayOutputWithContext(ctx context.Context) SslNegotiationPolicyAttributeArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SslNegotiationPolicyAttributeArrayOutput)
}

type SslNegotiationPolicyAttributeOutput struct { *pulumi.OutputState }

func (SslNegotiationPolicyAttributeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SslNegotiationPolicyAttribute)(nil)).Elem()
}

func (o SslNegotiationPolicyAttributeOutput) ToSslNegotiationPolicyAttributeOutput() SslNegotiationPolicyAttributeOutput {
	return o
}

func (o SslNegotiationPolicyAttributeOutput) ToSslNegotiationPolicyAttributeOutputWithContext(ctx context.Context) SslNegotiationPolicyAttributeOutput {
	return o
}

// The name of the attribute
func (o SslNegotiationPolicyAttributeOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func (v SslNegotiationPolicyAttribute) string { return v.Name }).(pulumi.StringOutput)
}

// The value of the attribute
func (o SslNegotiationPolicyAttributeOutput) Value() pulumi.StringOutput {
	return o.ApplyT(func (v SslNegotiationPolicyAttribute) string { return v.Value }).(pulumi.StringOutput)
}

type SslNegotiationPolicyAttributeArrayOutput struct { *pulumi.OutputState}

func (SslNegotiationPolicyAttributeArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]SslNegotiationPolicyAttribute)(nil)).Elem()
}

func (o SslNegotiationPolicyAttributeArrayOutput) ToSslNegotiationPolicyAttributeArrayOutput() SslNegotiationPolicyAttributeArrayOutput {
	return o
}

func (o SslNegotiationPolicyAttributeArrayOutput) ToSslNegotiationPolicyAttributeArrayOutputWithContext(ctx context.Context) SslNegotiationPolicyAttributeArrayOutput {
	return o
}

func (o SslNegotiationPolicyAttributeArrayOutput) Index(i pulumi.IntInput) SslNegotiationPolicyAttributeOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) SslNegotiationPolicyAttribute {
		return vs[0].([]SslNegotiationPolicyAttribute)[vs[1].(int)]
	}).(SslNegotiationPolicyAttributeOutput)
}

type GetLoadBalancerAccessLogs struct {
	Bucket string `pulumi:"bucket"`
	BucketPrefix string `pulumi:"bucketPrefix"`
	Enabled bool `pulumi:"enabled"`
	Interval int `pulumi:"interval"`
}

type GetLoadBalancerAccessLogsInput interface {
	pulumi.Input

	ToGetLoadBalancerAccessLogsOutput() GetLoadBalancerAccessLogsOutput
	ToGetLoadBalancerAccessLogsOutputWithContext(context.Context) GetLoadBalancerAccessLogsOutput
}

type GetLoadBalancerAccessLogsArgs struct {
	Bucket pulumi.StringInput `pulumi:"bucket"`
	BucketPrefix pulumi.StringInput `pulumi:"bucketPrefix"`
	Enabled pulumi.BoolInput `pulumi:"enabled"`
	Interval pulumi.IntInput `pulumi:"interval"`
}

func (GetLoadBalancerAccessLogsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerAccessLogs)(nil)).Elem()
}

func (i GetLoadBalancerAccessLogsArgs) ToGetLoadBalancerAccessLogsOutput() GetLoadBalancerAccessLogsOutput {
	return i.ToGetLoadBalancerAccessLogsOutputWithContext(context.Background())
}

func (i GetLoadBalancerAccessLogsArgs) ToGetLoadBalancerAccessLogsOutputWithContext(ctx context.Context) GetLoadBalancerAccessLogsOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetLoadBalancerAccessLogsOutput)
}

type GetLoadBalancerAccessLogsOutput struct { *pulumi.OutputState }

func (GetLoadBalancerAccessLogsOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerAccessLogs)(nil)).Elem()
}

func (o GetLoadBalancerAccessLogsOutput) ToGetLoadBalancerAccessLogsOutput() GetLoadBalancerAccessLogsOutput {
	return o
}

func (o GetLoadBalancerAccessLogsOutput) ToGetLoadBalancerAccessLogsOutputWithContext(ctx context.Context) GetLoadBalancerAccessLogsOutput {
	return o
}

func (o GetLoadBalancerAccessLogsOutput) Bucket() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerAccessLogs) string { return v.Bucket }).(pulumi.StringOutput)
}

func (o GetLoadBalancerAccessLogsOutput) BucketPrefix() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerAccessLogs) string { return v.BucketPrefix }).(pulumi.StringOutput)
}

func (o GetLoadBalancerAccessLogsOutput) Enabled() pulumi.BoolOutput {
	return o.ApplyT(func (v GetLoadBalancerAccessLogs) bool { return v.Enabled }).(pulumi.BoolOutput)
}

func (o GetLoadBalancerAccessLogsOutput) Interval() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerAccessLogs) int { return v.Interval }).(pulumi.IntOutput)
}

type GetLoadBalancerHealthCheck struct {
	HealthyThreshold int `pulumi:"healthyThreshold"`
	Interval int `pulumi:"interval"`
	Target string `pulumi:"target"`
	Timeout int `pulumi:"timeout"`
	UnhealthyThreshold int `pulumi:"unhealthyThreshold"`
}

type GetLoadBalancerHealthCheckInput interface {
	pulumi.Input

	ToGetLoadBalancerHealthCheckOutput() GetLoadBalancerHealthCheckOutput
	ToGetLoadBalancerHealthCheckOutputWithContext(context.Context) GetLoadBalancerHealthCheckOutput
}

type GetLoadBalancerHealthCheckArgs struct {
	HealthyThreshold pulumi.IntInput `pulumi:"healthyThreshold"`
	Interval pulumi.IntInput `pulumi:"interval"`
	Target pulumi.StringInput `pulumi:"target"`
	Timeout pulumi.IntInput `pulumi:"timeout"`
	UnhealthyThreshold pulumi.IntInput `pulumi:"unhealthyThreshold"`
}

func (GetLoadBalancerHealthCheckArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerHealthCheck)(nil)).Elem()
}

func (i GetLoadBalancerHealthCheckArgs) ToGetLoadBalancerHealthCheckOutput() GetLoadBalancerHealthCheckOutput {
	return i.ToGetLoadBalancerHealthCheckOutputWithContext(context.Background())
}

func (i GetLoadBalancerHealthCheckArgs) ToGetLoadBalancerHealthCheckOutputWithContext(ctx context.Context) GetLoadBalancerHealthCheckOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetLoadBalancerHealthCheckOutput)
}

type GetLoadBalancerHealthCheckOutput struct { *pulumi.OutputState }

func (GetLoadBalancerHealthCheckOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerHealthCheck)(nil)).Elem()
}

func (o GetLoadBalancerHealthCheckOutput) ToGetLoadBalancerHealthCheckOutput() GetLoadBalancerHealthCheckOutput {
	return o
}

func (o GetLoadBalancerHealthCheckOutput) ToGetLoadBalancerHealthCheckOutputWithContext(ctx context.Context) GetLoadBalancerHealthCheckOutput {
	return o
}

func (o GetLoadBalancerHealthCheckOutput) HealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerHealthCheck) int { return v.HealthyThreshold }).(pulumi.IntOutput)
}

func (o GetLoadBalancerHealthCheckOutput) Interval() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerHealthCheck) int { return v.Interval }).(pulumi.IntOutput)
}

func (o GetLoadBalancerHealthCheckOutput) Target() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerHealthCheck) string { return v.Target }).(pulumi.StringOutput)
}

func (o GetLoadBalancerHealthCheckOutput) Timeout() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerHealthCheck) int { return v.Timeout }).(pulumi.IntOutput)
}

func (o GetLoadBalancerHealthCheckOutput) UnhealthyThreshold() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerHealthCheck) int { return v.UnhealthyThreshold }).(pulumi.IntOutput)
}

type GetLoadBalancerListener struct {
	InstancePort int `pulumi:"instancePort"`
	InstanceProtocol string `pulumi:"instanceProtocol"`
	LbPort int `pulumi:"lbPort"`
	LbProtocol string `pulumi:"lbProtocol"`
	SslCertificateId string `pulumi:"sslCertificateId"`
}

type GetLoadBalancerListenerInput interface {
	pulumi.Input

	ToGetLoadBalancerListenerOutput() GetLoadBalancerListenerOutput
	ToGetLoadBalancerListenerOutputWithContext(context.Context) GetLoadBalancerListenerOutput
}

type GetLoadBalancerListenerArgs struct {
	InstancePort pulumi.IntInput `pulumi:"instancePort"`
	InstanceProtocol pulumi.StringInput `pulumi:"instanceProtocol"`
	LbPort pulumi.IntInput `pulumi:"lbPort"`
	LbProtocol pulumi.StringInput `pulumi:"lbProtocol"`
	SslCertificateId pulumi.StringInput `pulumi:"sslCertificateId"`
}

func (GetLoadBalancerListenerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerListener)(nil)).Elem()
}

func (i GetLoadBalancerListenerArgs) ToGetLoadBalancerListenerOutput() GetLoadBalancerListenerOutput {
	return i.ToGetLoadBalancerListenerOutputWithContext(context.Background())
}

func (i GetLoadBalancerListenerArgs) ToGetLoadBalancerListenerOutputWithContext(ctx context.Context) GetLoadBalancerListenerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetLoadBalancerListenerOutput)
}

type GetLoadBalancerListenerArrayInput interface {
	pulumi.Input

	ToGetLoadBalancerListenerArrayOutput() GetLoadBalancerListenerArrayOutput
	ToGetLoadBalancerListenerArrayOutputWithContext(context.Context) GetLoadBalancerListenerArrayOutput
}

type GetLoadBalancerListenerArray []GetLoadBalancerListenerInput

func (GetLoadBalancerListenerArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetLoadBalancerListener)(nil)).Elem()
}

func (i GetLoadBalancerListenerArray) ToGetLoadBalancerListenerArrayOutput() GetLoadBalancerListenerArrayOutput {
	return i.ToGetLoadBalancerListenerArrayOutputWithContext(context.Background())
}

func (i GetLoadBalancerListenerArray) ToGetLoadBalancerListenerArrayOutputWithContext(ctx context.Context) GetLoadBalancerListenerArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetLoadBalancerListenerArrayOutput)
}

type GetLoadBalancerListenerOutput struct { *pulumi.OutputState }

func (GetLoadBalancerListenerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetLoadBalancerListener)(nil)).Elem()
}

func (o GetLoadBalancerListenerOutput) ToGetLoadBalancerListenerOutput() GetLoadBalancerListenerOutput {
	return o
}

func (o GetLoadBalancerListenerOutput) ToGetLoadBalancerListenerOutputWithContext(ctx context.Context) GetLoadBalancerListenerOutput {
	return o
}

func (o GetLoadBalancerListenerOutput) InstancePort() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerListener) int { return v.InstancePort }).(pulumi.IntOutput)
}

func (o GetLoadBalancerListenerOutput) InstanceProtocol() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerListener) string { return v.InstanceProtocol }).(pulumi.StringOutput)
}

func (o GetLoadBalancerListenerOutput) LbPort() pulumi.IntOutput {
	return o.ApplyT(func (v GetLoadBalancerListener) int { return v.LbPort }).(pulumi.IntOutput)
}

func (o GetLoadBalancerListenerOutput) LbProtocol() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerListener) string { return v.LbProtocol }).(pulumi.StringOutput)
}

func (o GetLoadBalancerListenerOutput) SslCertificateId() pulumi.StringOutput {
	return o.ApplyT(func (v GetLoadBalancerListener) string { return v.SslCertificateId }).(pulumi.StringOutput)
}

type GetLoadBalancerListenerArrayOutput struct { *pulumi.OutputState}

func (GetLoadBalancerListenerArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetLoadBalancerListener)(nil)).Elem()
}

func (o GetLoadBalancerListenerArrayOutput) ToGetLoadBalancerListenerArrayOutput() GetLoadBalancerListenerArrayOutput {
	return o
}

func (o GetLoadBalancerListenerArrayOutput) ToGetLoadBalancerListenerArrayOutputWithContext(ctx context.Context) GetLoadBalancerListenerArrayOutput {
	return o
}

func (o GetLoadBalancerListenerArrayOutput) Index(i pulumi.IntInput) GetLoadBalancerListenerOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) GetLoadBalancerListener {
		return vs[0].([]GetLoadBalancerListener)[vs[1].(int)]
	}).(GetLoadBalancerListenerOutput)
}

func init() {
	pulumi.RegisterOutputType(LoadBalancerAccessLogsOutput{})
	pulumi.RegisterOutputType(LoadBalancerAccessLogsPtrOutput{})
	pulumi.RegisterOutputType(LoadBalancerHealthCheckOutput{})
	pulumi.RegisterOutputType(LoadBalancerHealthCheckPtrOutput{})
	pulumi.RegisterOutputType(LoadBalancerListenerOutput{})
	pulumi.RegisterOutputType(LoadBalancerListenerArrayOutput{})
	pulumi.RegisterOutputType(LoadBalancerPolicyPolicyAttributeOutput{})
	pulumi.RegisterOutputType(LoadBalancerPolicyPolicyAttributeArrayOutput{})
	pulumi.RegisterOutputType(SslNegotiationPolicyAttributeOutput{})
	pulumi.RegisterOutputType(SslNegotiationPolicyAttributeArrayOutput{})
	pulumi.RegisterOutputType(GetLoadBalancerAccessLogsOutput{})
	pulumi.RegisterOutputType(GetLoadBalancerHealthCheckOutput{})
	pulumi.RegisterOutputType(GetLoadBalancerListenerOutput{})
	pulumi.RegisterOutputType(GetLoadBalancerListenerArrayOutput{})
}