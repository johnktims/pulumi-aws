// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iam

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Uploads an SSH public key and associates it with the specified IAM user.
type SshKey struct {
	pulumi.CustomResourceState

	// Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
	Encoding pulumi.StringOutput `pulumi:"encoding"`
	// The MD5 message digest of the SSH public key.
	Fingerprint pulumi.StringOutput `pulumi:"fingerprint"`
	// The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
	PublicKey pulumi.StringOutput `pulumi:"publicKey"`
	// The unique identifier for the SSH public key.
	SshPublicKeyId pulumi.StringOutput `pulumi:"sshPublicKeyId"`
	// The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
	Status pulumi.StringOutput `pulumi:"status"`
	// The name of the IAM user to associate the SSH public key with.
	Username pulumi.StringOutput `pulumi:"username"`
}

// NewSshKey registers a new resource with the given unique name, arguments, and options.
func NewSshKey(ctx *pulumi.Context,
	name string, args *SshKeyArgs, opts ...pulumi.ResourceOption) (*SshKey, error) {
	if args == nil || args.Encoding == nil {
		return nil, errors.New("missing required argument 'Encoding'")
	}
	if args == nil || args.PublicKey == nil {
		return nil, errors.New("missing required argument 'PublicKey'")
	}
	if args == nil || args.Username == nil {
		return nil, errors.New("missing required argument 'Username'")
	}
	if args == nil {
		args = &SshKeyArgs{}
	}
	var resource SshKey
	err := ctx.RegisterResource("aws:iam/sshKey:SshKey", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSshKey gets an existing SshKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSshKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SshKeyState, opts ...pulumi.ResourceOption) (*SshKey, error) {
	var resource SshKey
	err := ctx.ReadResource("aws:iam/sshKey:SshKey", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SshKey resources.
type sshKeyState struct {
	// Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
	Encoding *string `pulumi:"encoding"`
	// The MD5 message digest of the SSH public key.
	Fingerprint *string `pulumi:"fingerprint"`
	// The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
	PublicKey *string `pulumi:"publicKey"`
	// The unique identifier for the SSH public key.
	SshPublicKeyId *string `pulumi:"sshPublicKeyId"`
	// The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
	Status *string `pulumi:"status"`
	// The name of the IAM user to associate the SSH public key with.
	Username *string `pulumi:"username"`
}

type SshKeyState struct {
	// Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
	Encoding pulumi.StringPtrInput
	// The MD5 message digest of the SSH public key.
	Fingerprint pulumi.StringPtrInput
	// The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
	PublicKey pulumi.StringPtrInput
	// The unique identifier for the SSH public key.
	SshPublicKeyId pulumi.StringPtrInput
	// The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
	Status pulumi.StringPtrInput
	// The name of the IAM user to associate the SSH public key with.
	Username pulumi.StringPtrInput
}

func (SshKeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*sshKeyState)(nil)).Elem()
}

type sshKeyArgs struct {
	// Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
	Encoding string `pulumi:"encoding"`
	// The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
	PublicKey string `pulumi:"publicKey"`
	// The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
	Status *string `pulumi:"status"`
	// The name of the IAM user to associate the SSH public key with.
	Username string `pulumi:"username"`
}

// The set of arguments for constructing a SshKey resource.
type SshKeyArgs struct {
	// Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
	Encoding pulumi.StringInput
	// The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
	PublicKey pulumi.StringInput
	// The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
	Status pulumi.StringPtrInput
	// The name of the IAM user to associate the SSH public key with.
	Username pulumi.StringInput
}

func (SshKeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sshKeyArgs)(nil)).Elem()
}
