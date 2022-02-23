import "./index.scss";

type TableProps = {
  title: string;
  items: any;
  favorites: any;
  handleChange: (id: string) => void
};

const Table: React.FC<TableProps> = ({ title, items, favorites, handleChange }) => {
  return (
    <>
      <h1 className="table-title">{title}</h1>
      <table className="items">
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Description</th>
            <th>Stars</th>
            <th>Favorited</th>
          </tr>
        </thead>
        <tbody>
          {!!items &&
            items.map((item: any) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <a target="_blank" href={item.html_url}>
                    {item.html_url}
                  </a>
                </td>
                <td>{item.description}</td>
                <td>{item.stargazers_count}</td>
                <td>
                  {!!favorites && favorites[item.id] ? (
                    <img data-test={item.id} onClick={() => handleChange(item.id)} src="/images/star-filled.svg" />
                  ) : (
                    <img data-test={item.id} onClick={() => { console.log('clicked'); handleChange(item.id)}} src="/images/star-outlined.svg" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {(!items || items?.length === 0) && (<p className="none"><i>(None)</i></p>)}
    </>
  );
};

export default Table;
