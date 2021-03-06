// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecr

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The ECR Image data source allows the details of an image with a particular tag or digest to be retrieved.
func GetImage(ctx *pulumi.Context, args *GetImageArgs, opts ...pulumi.InvokeOption) (*GetImageResult, error) {
	var rv GetImageResult
	err := ctx.Invoke("aws:ecr/getImage:getImage", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getImage.
type GetImageArgs struct {
	// The sha256 digest of the image manifest. At least one of `imageDigest` or `imageTag` must be specified.
	ImageDigest *string `pulumi:"imageDigest"`
	// The tag associated with this image. At least one of `imageDigest` or `imageTag` must be specified.
	ImageTag *string `pulumi:"imageTag"`
	// The ID of the Registry where the repository resides.
	RegistryId *string `pulumi:"registryId"`
	// The name of the ECR Repository.
	RepositoryName string `pulumi:"repositoryName"`
}

// A collection of values returned by getImage.
type GetImageResult struct {
	// id is the provider-assigned unique ID for this managed resource.
	Id          string `pulumi:"id"`
	ImageDigest string `pulumi:"imageDigest"`
	// The date and time, expressed as a unix timestamp, at which the current image was pushed to the repository.
	ImagePushedAt int `pulumi:"imagePushedAt"`
	// The size, in bytes, of the image in the repository.
	ImageSizeInBytes int     `pulumi:"imageSizeInBytes"`
	ImageTag         *string `pulumi:"imageTag"`
	// The list of tags associated with this image.
	ImageTags      []string `pulumi:"imageTags"`
	RegistryId     string   `pulumi:"registryId"`
	RepositoryName string   `pulumi:"repositoryName"`
}
