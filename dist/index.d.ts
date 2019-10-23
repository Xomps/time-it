export default function timeIt(label: string, fn: () => any, log?: boolean): Promise<{
    returnVal: any;
    ms: number;
    asString: string;
}>;
