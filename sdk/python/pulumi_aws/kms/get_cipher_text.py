# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetCipherTextResult:
    """
    A collection of values returned by getCipherText.
    """
    def __init__(__self__, ciphertext_blob=None, context=None, id=None, key_id=None, plaintext=None):
        if ciphertext_blob and not isinstance(ciphertext_blob, str):
            raise TypeError("Expected argument 'ciphertext_blob' to be a str")
        __self__.ciphertext_blob = ciphertext_blob
        """
        Base64 encoded ciphertext
        """
        if context and not isinstance(context, dict):
            raise TypeError("Expected argument 'context' to be a dict")
        __self__.context = context
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
        if key_id and not isinstance(key_id, str):
            raise TypeError("Expected argument 'key_id' to be a str")
        __self__.key_id = key_id
        if plaintext and not isinstance(plaintext, str):
            raise TypeError("Expected argument 'plaintext' to be a str")
        __self__.plaintext = plaintext
class AwaitableGetCipherTextResult(GetCipherTextResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCipherTextResult(
            ciphertext_blob=self.ciphertext_blob,
            context=self.context,
            id=self.id,
            key_id=self.key_id,
            plaintext=self.plaintext)

def get_cipher_text(context=None,key_id=None,plaintext=None,opts=None):
    """
    The KMS ciphertext data source allows you to encrypt plaintext into ciphertext
    by using an AWS KMS customer master key. The value returned by this data source
    changes every apply. For a stable ciphertext value, see the [`kms.Ciphertext`
    resource](https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html).




    :param dict context: An optional mapping that makes up the encryption context.
    :param str key_id: Globally unique key ID for the customer master key.
    :param str plaintext: Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.
    """
    __args__ = dict()


    __args__['context'] = context
    __args__['keyId'] = key_id
    __args__['plaintext'] = plaintext
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:kms/getCipherText:getCipherText', __args__, opts=opts).value

    return AwaitableGetCipherTextResult(
        ciphertext_blob=__ret__.get('ciphertextBlob'),
        context=__ret__.get('context'),
        id=__ret__.get('id'),
        key_id=__ret__.get('keyId'),
        plaintext=__ret__.get('plaintext'))
