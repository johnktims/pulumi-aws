// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an Elastic Transcoder preset resource.
 */
export class Preset extends pulumi.Resource {
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * Audio parameters object (documented below).
     */
    public readonly audio?: pulumi.Computed<{ audioPackingMode?: string, bitRate?: string, channels?: string, codec?: string, sampleRate?: string }[]>;
    /**
     * Codec options for the audio parameters (documented below)
     */
    public readonly audioCodecOptions?: pulumi.Computed<{ bitDepth?: string, bitOrder?: string, profile?: string, signed?: string }[]>;
    /**
     * The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
     */
    public readonly container: pulumi.Computed<string>;
    /**
     * A description of the preset (maximum 255 characters)
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The name of the preset. (maximum 40 characters)
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Thumbnail parameters object (documented below)
     */
    public readonly thumbnails?: pulumi.Computed<{ aspectRatio?: string, format?: string, interval?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    public readonly type: pulumi.Computed<string>;
    /**
     * Video parameters object (documented below)
     */
    public readonly video?: pulumi.Computed<{ aspectRatio?: string, bitRate?: string, codec?: string, displayAspectRatio?: string, fixedGop?: string, frameRate?: string, keyframesMaxDist?: string, maxFrameRate?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    public readonly videoCodecOptions?: pulumi.Computed<{[key: string]: any}>;
    /**
     * Watermark parameters for the video parameters (documented below)
     * * `video_codec_options` (Optional, Forces new resource) Codec options for the video parameters
     */
    public readonly videoWatermarks?: pulumi.Computed<{ horizontalAlign?: string, horizontalOffset?: string, id?: string, maxHeight?: string, maxWidth?: string, opacity?: string, sizingPolicy?: string, target?: string, verticalAlign?: string, verticalOffset?: string }[]>;

    /**
     * Create a Preset resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Preset instance
     * @param args A collection of arguments for creating this Preset instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: PresetArgs, dependsOn?: pulumi.Resource[]) {
        if (args.container === undefined) {
            throw new Error("Missing required property 'container'");
        }
        super("aws:elastictranscoder/preset:Preset", urnName, {
            "audio": args.audio,
            "audioCodecOptions": args.audioCodecOptions,
            "container": args.container,
            "description": args.description,
            "name": args.name,
            "thumbnails": args.thumbnails,
            "type": args.type,
            "video": args.video,
            "videoCodecOptions": args.videoCodecOptions,
            "videoWatermarks": args.videoWatermarks,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Preset resource.
 */
export interface PresetArgs {
    /**
     * Audio parameters object (documented below).
     */
    readonly audio?: pulumi.ComputedValue<{ audioPackingMode?: pulumi.ComputedValue<string>, bitRate?: pulumi.ComputedValue<string>, channels?: pulumi.ComputedValue<string>, codec?: pulumi.ComputedValue<string>, sampleRate?: pulumi.ComputedValue<string> }>[];
    /**
     * Codec options for the audio parameters (documented below)
     */
    readonly audioCodecOptions?: pulumi.ComputedValue<{ bitDepth?: pulumi.ComputedValue<string>, bitOrder?: pulumi.ComputedValue<string>, profile?: pulumi.ComputedValue<string>, signed?: pulumi.ComputedValue<string> }>[];
    /**
     * The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
     */
    readonly container: pulumi.ComputedValue<string>;
    /**
     * A description of the preset (maximum 255 characters)
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The name of the preset. (maximum 40 characters)
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Thumbnail parameters object (documented below)
     */
    readonly thumbnails?: pulumi.ComputedValue<{ aspectRatio?: pulumi.ComputedValue<string>, format?: pulumi.ComputedValue<string>, interval?: pulumi.ComputedValue<string>, maxHeight?: pulumi.ComputedValue<string>, maxWidth?: pulumi.ComputedValue<string>, paddingPolicy?: pulumi.ComputedValue<string>, resolution?: pulumi.ComputedValue<string>, sizingPolicy?: pulumi.ComputedValue<string> }>[];
    readonly type?: pulumi.ComputedValue<string>;
    /**
     * Video parameters object (documented below)
     */
    readonly video?: pulumi.ComputedValue<{ aspectRatio?: pulumi.ComputedValue<string>, bitRate?: pulumi.ComputedValue<string>, codec?: pulumi.ComputedValue<string>, displayAspectRatio?: pulumi.ComputedValue<string>, fixedGop?: pulumi.ComputedValue<string>, frameRate?: pulumi.ComputedValue<string>, keyframesMaxDist?: pulumi.ComputedValue<string>, maxFrameRate?: pulumi.ComputedValue<string>, maxHeight?: pulumi.ComputedValue<string>, maxWidth?: pulumi.ComputedValue<string>, paddingPolicy?: pulumi.ComputedValue<string>, resolution?: pulumi.ComputedValue<string>, sizingPolicy?: pulumi.ComputedValue<string> }>[];
    readonly videoCodecOptions?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * Watermark parameters for the video parameters (documented below)
     * * `video_codec_options` (Optional, Forces new resource) Codec options for the video parameters
     */
    readonly videoWatermarks?: pulumi.ComputedValue<{ horizontalAlign?: pulumi.ComputedValue<string>, horizontalOffset?: pulumi.ComputedValue<string>, id?: pulumi.ComputedValue<string>, maxHeight?: pulumi.ComputedValue<string>, maxWidth?: pulumi.ComputedValue<string>, opacity?: pulumi.ComputedValue<string>, sizingPolicy?: pulumi.ComputedValue<string>, target?: pulumi.ComputedValue<string>, verticalAlign?: pulumi.ComputedValue<string>, verticalOffset?: pulumi.ComputedValue<string> }>[];
}

