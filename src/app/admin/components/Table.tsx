export default function Table({ columns, data, actions }: any) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c: string) => (
            <th key={c}>{c}</th>
          ))}
          {actions && <th>Действия</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            {columns.map((c: string) => (
              <td key={c}>{row[c]}</td>
            ))}
            {actions && (
              <td>
                <button onClick={() => actions.onDelete(row._id)}>Удалить</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
