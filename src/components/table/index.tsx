import './index.scss';

type TableProps = {
  title: string
  items: any
}

const Table: React.FC<TableProps> = ({ title, items }) => {
  return (<>
  <h1 className='table-title'>{ title }</h1>
  <table className="items">
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Link
        </th>
        <th>
          Description
        </th>
        <th>
          Stars
        </th>
        <th>
          Favorited
        </th>
      </tr>
    </thead>
    <tbody>
      {!!items && items.map((item: any) => (<tr>
        <td>{item.name}</td>
        <td>
          <a target="_blank" href={item.html_url}>{item.html_url}</a>
          </td>
        <td>{item.description}</td>
        <td>{item.stargazers_count}</td>
        <td><img src="/images/star-outlined.svg" /></td>
      </tr>))}
    </tbody>
  </table>
  </>)
}

export default Table