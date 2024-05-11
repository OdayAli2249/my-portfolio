
export type LogicalOp = 'LT' | 'GT' | 'EQ' | 'BT';
export type Unit = 'Kg' | 'Thorm' | 'Percentage';

export type Need = {
    name: string;
    value: number | number[];
    op: LogicalOp;
    unit: Unit,
    uncertaintyRate?: number;
}

export type Component = {
    name: string;
    value: number;
}
