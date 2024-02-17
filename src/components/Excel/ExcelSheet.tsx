import React, { Validator } from "react";
import PropTypes from "prop-types";

import { ExcelSheetProps } from "./Excel.types";

const ExcelSheet: React.FC<ExcelSheetProps> = ({ }) => {
    return null;
};

ExcelSheet.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object) as Validator<object[]>,
    children: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.arrayOf(PropTypes.elementType)
    ]).isRequired as Validator<NonNullable<NonNullable<any | (any | null | undefined)[] | null | undefined>>>
};

export { ExcelSheet };