// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue
{
    /// <summary>
    /// Provides a Glue Catalog Table Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality.
    /// </summary>
    public partial class CatalogTable : Pulumi.CustomResource
    {
        /// <summary>
        /// ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
        /// </summary>
        [Output("catalogId")]
        public Output<string> CatalogId { get; private set; } = null!;

        /// <summary>
        /// Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
        /// </summary>
        [Output("databaseName")]
        public Output<string> DatabaseName { get; private set; } = null!;

        /// <summary>
        /// Description of the table.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Name of the SerDe.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Owner of the table.
        /// </summary>
        [Output("owner")]
        public Output<string?> Owner { get; private set; } = null!;

        /// <summary>
        /// A map of initialization parameters for the SerDe, in key-value form.
        /// </summary>
        [Output("parameters")]
        public Output<ImmutableDictionary<string, string>?> Parameters { get; private set; } = null!;

        /// <summary>
        /// A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
        /// </summary>
        [Output("partitionKeys")]
        public Output<ImmutableArray<Outputs.CatalogTablePartitionKey>> PartitionKeys { get; private set; } = null!;

        /// <summary>
        /// Retention time for this table.
        /// </summary>
        [Output("retention")]
        public Output<int?> Retention { get; private set; } = null!;

        /// <summary>
        /// A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
        /// </summary>
        [Output("storageDescriptor")]
        public Output<Outputs.CatalogTableStorageDescriptor?> StorageDescriptor { get; private set; } = null!;

        /// <summary>
        /// The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
        /// </summary>
        [Output("tableType")]
        public Output<string?> TableType { get; private set; } = null!;

        /// <summary>
        /// If the table is a view, the expanded text of the view; otherwise null.
        /// </summary>
        [Output("viewExpandedText")]
        public Output<string?> ViewExpandedText { get; private set; } = null!;

        /// <summary>
        /// If the table is a view, the original text of the view; otherwise null.
        /// </summary>
        [Output("viewOriginalText")]
        public Output<string?> ViewOriginalText { get; private set; } = null!;


        /// <summary>
        /// Create a CatalogTable resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public CatalogTable(string name, CatalogTableArgs args, CustomResourceOptions? options = null)
            : base("aws:glue/catalogTable:CatalogTable", name, args ?? new CatalogTableArgs(), MakeResourceOptions(options, ""))
        {
        }

        private CatalogTable(string name, Input<string> id, CatalogTableState? state = null, CustomResourceOptions? options = null)
            : base("aws:glue/catalogTable:CatalogTable", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing CatalogTable resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static CatalogTable Get(string name, Input<string> id, CatalogTableState? state = null, CustomResourceOptions? options = null)
        {
            return new CatalogTable(name, id, state, options);
        }
    }

    public sealed class CatalogTableArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
        /// </summary>
        [Input("catalogId")]
        public Input<string>? CatalogId { get; set; }

        /// <summary>
        /// Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// Description of the table.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Name of the SerDe.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Owner of the table.
        /// </summary>
        [Input("owner")]
        public Input<string>? Owner { get; set; }

        [Input("parameters")]
        private InputMap<string>? _parameters;

        /// <summary>
        /// A map of initialization parameters for the SerDe, in key-value form.
        /// </summary>
        public InputMap<string> Parameters
        {
            get => _parameters ?? (_parameters = new InputMap<string>());
            set => _parameters = value;
        }

        [Input("partitionKeys")]
        private InputList<Inputs.CatalogTablePartitionKeyArgs>? _partitionKeys;

        /// <summary>
        /// A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
        /// </summary>
        public InputList<Inputs.CatalogTablePartitionKeyArgs> PartitionKeys
        {
            get => _partitionKeys ?? (_partitionKeys = new InputList<Inputs.CatalogTablePartitionKeyArgs>());
            set => _partitionKeys = value;
        }

        /// <summary>
        /// Retention time for this table.
        /// </summary>
        [Input("retention")]
        public Input<int>? Retention { get; set; }

        /// <summary>
        /// A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
        /// </summary>
        [Input("storageDescriptor")]
        public Input<Inputs.CatalogTableStorageDescriptorArgs>? StorageDescriptor { get; set; }

        /// <summary>
        /// The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
        /// </summary>
        [Input("tableType")]
        public Input<string>? TableType { get; set; }

        /// <summary>
        /// If the table is a view, the expanded text of the view; otherwise null.
        /// </summary>
        [Input("viewExpandedText")]
        public Input<string>? ViewExpandedText { get; set; }

        /// <summary>
        /// If the table is a view, the original text of the view; otherwise null.
        /// </summary>
        [Input("viewOriginalText")]
        public Input<string>? ViewOriginalText { get; set; }

        public CatalogTableArgs()
        {
        }
    }

    public sealed class CatalogTableState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
        /// </summary>
        [Input("catalogId")]
        public Input<string>? CatalogId { get; set; }

        /// <summary>
        /// Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
        /// </summary>
        [Input("databaseName")]
        public Input<string>? DatabaseName { get; set; }

        /// <summary>
        /// Description of the table.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Name of the SerDe.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Owner of the table.
        /// </summary>
        [Input("owner")]
        public Input<string>? Owner { get; set; }

        [Input("parameters")]
        private InputMap<string>? _parameters;

        /// <summary>
        /// A map of initialization parameters for the SerDe, in key-value form.
        /// </summary>
        public InputMap<string> Parameters
        {
            get => _parameters ?? (_parameters = new InputMap<string>());
            set => _parameters = value;
        }

        [Input("partitionKeys")]
        private InputList<Inputs.CatalogTablePartitionKeyGetArgs>? _partitionKeys;

        /// <summary>
        /// A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
        /// </summary>
        public InputList<Inputs.CatalogTablePartitionKeyGetArgs> PartitionKeys
        {
            get => _partitionKeys ?? (_partitionKeys = new InputList<Inputs.CatalogTablePartitionKeyGetArgs>());
            set => _partitionKeys = value;
        }

        /// <summary>
        /// Retention time for this table.
        /// </summary>
        [Input("retention")]
        public Input<int>? Retention { get; set; }

        /// <summary>
        /// A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
        /// </summary>
        [Input("storageDescriptor")]
        public Input<Inputs.CatalogTableStorageDescriptorGetArgs>? StorageDescriptor { get; set; }

        /// <summary>
        /// The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
        /// </summary>
        [Input("tableType")]
        public Input<string>? TableType { get; set; }

        /// <summary>
        /// If the table is a view, the expanded text of the view; otherwise null.
        /// </summary>
        [Input("viewExpandedText")]
        public Input<string>? ViewExpandedText { get; set; }

        /// <summary>
        /// If the table is a view, the original text of the view; otherwise null.
        /// </summary>
        [Input("viewOriginalText")]
        public Input<string>? ViewOriginalText { get; set; }

        public CatalogTableState()
        {
        }
    }
}
