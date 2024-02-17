import { ReactNode } from "react";
import { ExcelColumn } from "./ExcelColumn";
import { ExcelSheet } from "./ExcelSheet";

declare interface ExportExcelInterface {
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

interface ExcelFileProps {
    filename: string;
    children: React.ReactElement<typeof ExcelSheet> | Array<React.ReactElement<typeof ExcelSheet>>;
    element: ReactNode;
}

export type {
    ExcelColumnProps,
    ExcelSheetProps,
    ExportExcelInterface,
    ExcelFileProps
}