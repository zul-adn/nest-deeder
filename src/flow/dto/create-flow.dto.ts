export class CreateFlowDto {
    readonly uuid: string;
    readonly name: string;
    readonly organization_uuid: string;
    readonly flow: string;
    readonly nodes: string;
    readonly edges: string;
}
