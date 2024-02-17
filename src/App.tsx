import { ExportExcel } from "./components/Excel"

function App() {
  return (
    <>
      <ExportExcel
        worksheets={[
          {
            columns: [
              {
                label: 'Time',
                value: 'time'
              }
            ],
            data: [
              {
                time: 'Flamengo'
              },
              {
                time: 'Fluminense'
              },
            ],
            name: 'Times'
          },
          {
            columns: [
              {
                label: 'Brasileirão',
                value: 'brasileirao'
              },
              {
                label: 'Libertadores',
                value: 'libertadores'
              }
            ],
            data: [
              {
                brasileirao: 8,
                libertadores: 3
              },
              {
                brasileirao: 2,
                libertadores: 1
              },
            ],
            name: 'Campeonatos'
          },
        ]}
        element={
          <button>
            download sheet
          </button>
        }
        sheetname="first-sheet"
      />
    </>
  )
}

export default App
