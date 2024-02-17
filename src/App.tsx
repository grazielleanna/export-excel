
import { ExcelFile } from "./components/Excel"
import { ExcelColumn, ExcelSheet } from "./lib/main"

function App() {
  return (
    <>
      <ExcelFile
        element={
          <button>
            download
          </button>
        }
        filename="excel-cores"
      >
        <ExcelSheet name="Cores" data={[
          {
            name: 'Azul',
          },
          {
            name: 'Amarelo',
          },
          {
            name: 'Rosa',
          },
          {
            name: 'Preto',
          },
        ]}>
          <ExcelColumn label="Nome" value="name" />
        </ExcelSheet>
      </ExcelFile>
    </>
  )
}

export default App
