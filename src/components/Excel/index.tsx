import React, { Validator } from "react";
import PropTypes from "prop-types";
import { saveAs } from 'file-saver';
import * as ExcelJS from "exceljs";

import { ExcelSheet } from "./ExcelSheet";
import { ExcelFileProps } from "./Excel.types";

const ExcelFile: React.FC<ExcelFileProps> = ({ filename, children, element }) => {

    /**
     * @author: Grazielle Conceição
     * @since: 2024-02-17
     * Function that downloads data to Excel
     */
    async function handleDownload() {
        const blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

        const workbook = new ExcelJS.Workbook();

        React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === ExcelSheet) {
                const sheetData = (child.props as any).data;
                const sheetName = child.props.name;

                const sheet = workbook.addWorksheet(sheetName);

                const columns = (child.props as any).children;

                const sheetColumns = React.Children.map(columns, (columnChild) => {
                    /**
                     * If the element is valid, it returns an object according to the format that exceljs
                     * expects to insert columns
                     */
                    if (React.isValidElement(columnChild)) {
                        const columnChildProps = columnChild.props as any;

                        return {
                            header: columnChildProps.label,
                            key: columnChildProps.value
                        }
                    }
                });

                // Checks if there is any columns whose value is a function customized by the user
                const hasValueIsFunction = sheetColumns.find(
                    (item: { header: string, key: string | Function }) => typeof item.key === 'function'
                );
                sheet.columns = sheetColumns;

                sheetData.forEach((row: any[]) => {
                    if (!hasValueIsFunction) {
                        sheet.addRow(row);
                    } else {
                        const sheetRow: string[] = [];

                        React.Children.forEach(columns, column => {
                            /**
                             * If it is a function execut it to obtain the value,
                             * otherwise it obtains the value of the line passing the name of the propery
                             */
                            const getValue = typeof column.props.value === 'function'
                                ? column.props.value
                                : (row: any) => row[column.props.value];

                            const value = getValue(row);

                            sheetRow.push(value);
                        });

                        sheet.addRow(sheetRow);
                    }
                });
            }
        });

        await workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: blobType });
            saveAs(blob, filename);
        });
    };

    return (
        <span onClick={handleDownload}>{element}</span>
    );
};

ExcelFile.propTypes = {
    filename: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.arrayOf(PropTypes.elementType)
    ]).isRequired as Validator<NonNullable<NonNullable<any | (any | null | undefined)[] | null | undefined>>>
};

export { ExcelFile };
