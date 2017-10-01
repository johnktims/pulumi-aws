// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * 
 * Provides a VPN connection connected to a VPC. These objects can be connected to customer gateways, and allow you to establish tunnels between your network and the VPC.
 */
export class VpnConnection extends pulumi.Resource {
    /**
     * The configuration information for the VPN connection's customer gateway (in the native XML format).
     */
    public readonly customerGatewayConfiguration: pulumi.Computed<string>;
    /**
     * The ID of the customer gateway.
     */
    public readonly customerGatewayId: pulumi.Computed<string>;
    public readonly routes: pulumi.Computed<{ destinationCidrBlock: string, source: string, state: string }[]>;
    /**
     * Whether the VPN connection uses static routes exclusively. Static routes must be used for devices that don't support BGP.
     */
    public readonly staticRoutesOnly: pulumi.Computed<boolean>;
    /**
     * Tags to apply to the connection.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * The public IP address of the first VPN tunnel.
     */
    public /*out*/ readonly tunnel1Address: pulumi.Computed<string>;
    /**
     * The bgp asn number of the first VPN tunnel.
     */
    public /*out*/ readonly tunnel1BgpAsn: pulumi.Computed<string>;
    /**
     * The bgp holdtime of the first VPN tunnel.
     */
    public /*out*/ readonly tunnel1BgpHoldtime: pulumi.Computed<number>;
    /**
     * The RFC 6890 link-local address of the first VPN tunnel (Customer Gateway Side).
     */
    public /*out*/ readonly tunnel1CgwInsideAddress: pulumi.Computed<string>;
    /**
     * The preshared key of the first VPN tunnel.
     */
    public /*out*/ readonly tunnel1PresharedKey: pulumi.Computed<string>;
    /**
     * The RFC 6890 link-local address of the first VPN tunnel (VPN Gateway Side).
     */
    public /*out*/ readonly tunnel1VgwInsideAddress: pulumi.Computed<string>;
    /**
     * The public IP address of the second VPN tunnel.
     */
    public /*out*/ readonly tunnel2Address: pulumi.Computed<string>;
    /**
     * The bgp asn number of the second VPN tunnel.
     */
    public /*out*/ readonly tunnel2BgpAsn: pulumi.Computed<string>;
    /**
     * The bgp holdtime of the second VPN tunnel.
     */
    public /*out*/ readonly tunnel2BgpHoldtime: pulumi.Computed<number>;
    /**
     * The RFC 6890 link-local address of the second VPN tunnel (Customer Gateway Side).
     */
    public /*out*/ readonly tunnel2CgwInsideAddress: pulumi.Computed<string>;
    /**
     * The preshared key of the second VPN tunnel.
     */
    public /*out*/ readonly tunnel2PresharedKey: pulumi.Computed<string>;
    /**
     * The RFC 6890 link-local address of the second VPN tunnel (VPN Gateway Side).
     */
    public /*out*/ readonly tunnel2VgwInsideAddress: pulumi.Computed<string>;
    /**
     * The type of VPN connection. The only type AWS supports at this time is "ipsec.1".
     */
    public readonly type: pulumi.Computed<string>;
    public readonly vgwTelemetry: pulumi.Computed<{ acceptedRouteCount: number, lastStatusChange: string, outsideIpAddress: string, status: string, statusMessage: string }[]>;
    /**
     * The ID of the virtual private gateway.
     */
    public readonly vpnGatewayId: pulumi.Computed<string>;

    /**
     * Create a VpnConnection resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this VpnConnection instance
     * @param args A collection of arguments for creating this VpnConnection instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: VpnConnectionArgs, dependsOn?: pulumi.Resource[]) {
        if (args.customerGatewayId === undefined) {
            throw new Error("Missing required property 'customerGatewayId'");
        }
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        if (args.vpnGatewayId === undefined) {
            throw new Error("Missing required property 'vpnGatewayId'");
        }
        super("aws:ec2/vpnConnection:VpnConnection", urnName, {
            "customerGatewayConfiguration": args.customerGatewayConfiguration,
            "customerGatewayId": args.customerGatewayId,
            "routes": args.routes,
            "staticRoutesOnly": args.staticRoutesOnly,
            "tags": args.tags,
            "type": args.type,
            "vgwTelemetry": args.vgwTelemetry,
            "vpnGatewayId": args.vpnGatewayId,
            "tunnel1Address": undefined,
            "tunnel1BgpAsn": undefined,
            "tunnel1BgpHoldtime": undefined,
            "tunnel1CgwInsideAddress": undefined,
            "tunnel1PresharedKey": undefined,
            "tunnel1VgwInsideAddress": undefined,
            "tunnel2Address": undefined,
            "tunnel2BgpAsn": undefined,
            "tunnel2BgpHoldtime": undefined,
            "tunnel2CgwInsideAddress": undefined,
            "tunnel2PresharedKey": undefined,
            "tunnel2VgwInsideAddress": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a VpnConnection resource.
 */
export interface VpnConnectionArgs {
    readonly customerGatewayConfiguration?: pulumi.ComputedValue<string>;
    /**
     * The ID of the customer gateway.
     */
    readonly customerGatewayId: pulumi.ComputedValue<string>;
    readonly routes?: pulumi.ComputedValue<{ destinationCidrBlock?: pulumi.ComputedValue<string>, source?: pulumi.ComputedValue<string>, state?: pulumi.ComputedValue<string> }>[];
    /**
     * Whether the VPN connection uses static routes exclusively. Static routes must be used for devices that don't support BGP.
     */
    readonly staticRoutesOnly?: pulumi.ComputedValue<boolean>;
    /**
     * Tags to apply to the connection.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * The type of VPN connection. The only type AWS supports at this time is "ipsec.1".
     */
    readonly type: pulumi.ComputedValue<string>;
    readonly vgwTelemetry?: pulumi.ComputedValue<{ acceptedRouteCount?: pulumi.ComputedValue<number>, lastStatusChange?: pulumi.ComputedValue<string>, outsideIpAddress?: pulumi.ComputedValue<string>, status?: pulumi.ComputedValue<string>, statusMessage?: pulumi.ComputedValue<string> }>[];
    /**
     * The ID of the virtual private gateway.
     */
    readonly vpnGatewayId: pulumi.ComputedValue<string>;
}

