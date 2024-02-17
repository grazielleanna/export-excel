import { ReactNode } from "react";
import { ExcelColumn } from "./ExcelColumn";

export declare interface ExportExcelInterface {
    element: ReactNode;
    worksheets: Worksheet[];
    sheetname: string;
    children: ReactNode;
}

interface Worksheet {
    name: string;
    columns: {
        label: string;
        value: string;
    }[];
    data: Object[];
}

interface ExcelColumnProps {
    label: string;
    value: number | boolean | string | Function;
}

interface ExcelSheetProps {
    name: string;
    data: Array<object>;
    children: React.ReactElement<typeof ExcelColumn> | Array<React.ReactElement<typeof ExcelColumn>>;
}

export type {
    ExcelColumnProps,
    ExcelSheetProps
}