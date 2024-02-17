# React Excel Exporter

Library for exporting data to Excel made with React and ViteJS.

## Installation

If you are usign [yarn](https://github.com/yarnpkg/berry):
`yarn add react-excel-exporter`

If you are usign [npm](https://www.npmjs.com/):
`npm install react-excel-exporter`

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