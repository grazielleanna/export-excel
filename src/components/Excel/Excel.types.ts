import { ReactNode } from "react";

export declare interface ExportExcelInterface {
    element: ReactNode;
    worksheets: Worksheet[];
    sheetname: string;
}

interface Worksheet {
    name: string;
    columns: {
        label: string;
        value: string;
    }[];
    data: Object[];
}