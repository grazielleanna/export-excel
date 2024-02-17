import * as ExcelJS from "exceljs";
import { saveAs } from 'file-saver';

import { ExportExcelInterface } from "./Excel.types";

export function ExportExcel({ element, worksheets, sheetname }: ExportExcelInterface) {

    async function handleDownloadSheet() {
        const blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

        const workbook = new ExcelJS.Workbook();

        worksheets?.forEach((worksheet) => {
            const sheet = workbook.addWorksheet(worksheet.name);
            sheet.columns = worksheet.columns.map(column => {
                return {
                    header: column.label,
                    key: column.value
                }
            });

            worksheet.data.forEach((row) => {
                sheet.addRow(row);
            });
        });

        await workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: blobType });
            saveAs(blob, sheetname);
        });
    }

    return (
        <>
            <span onClick={handleDownloadSheet}>
                {element}
            </span>
        </>
    )
}