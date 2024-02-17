# React Excel Exporter

Library for exporting data to Excel made with React and ViteJS.

## Installation

- If you are usign [yarn](https://github.com/yarnpkg/berry):
```sh
yarn add react-excel-exporter
```

- If you are usign [npm](https://www.npmjs.com/):
```sh
npm install react-excel-exporter
```

## ExcelFile Props

| Prop          | Type                | Default    | Required | Description                                       |
| :------------ | :------------------ | :--------- | :------- | :------------------------------------------------ |
| filename      | `string`            | `null`     | `true`   | Name of the excel file that will be downloaded    |
| element       | `ReactNode`         | `null`     | `true`   | Element to download excel file                    |
| children      | `Array<ExcelSheet>` | `null`     | `true`   | ExcelSheet Represents data                        |


### ExcelSheet Props

| Prop     | Type                    | Default | Required | Description        |
| :------- | :---------------------- | :------ | :------- | :----------------- |
| name     | `string`                | `null`  | `true`   | Sheet name in file |
| data     | `array<object>`         | `null`  | `true`   | Excel Sheet data   |
| children | `ExcelColumn`           | `null`  | `true`   | ExcelColumns       |

### ExcelColumn Props

| Prop     | Type                    | Default | Required | Description                     |
| :------- | :---------------------- | :------ | :------- | :------------------------------ | 
| name     | `string`                | `null`  | `true`   | Column name in file             |
| value    | `string | function`     | `null`  | `true`   | Property name to access value   |

## Code Example

```ts
import { ExcelFile, ExcelColumn, ExcelSheet } from 'react-excel-exporter'

function App() {
  return (
      <ExcelFile
        element={
          <button>
            download
          </button>
        }
        filename="excel-colors"
      >
        <ExcelSheet 
          name="Colors" 
          data={[
            {
              name: 'Blue',
              is_dark: false,
            },
            {
              name: 'Yellow',
              is_dark: false
            },
            {
              name: 'Pink',
              is_dark: false,
            },
            {
              name: 'Black',
              is_dark: true
            },
          ]}
        >
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Color Dark" value={(col) => col.is_dark ? "Yes" : "False"} />
        </ExcelSheet>
      </ExcelFile>
  )
}
```