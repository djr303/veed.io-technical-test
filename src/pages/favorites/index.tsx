import Table from '../../components/table'

type FavoritesProps = {
  items: any;
  favorites: any;
  handleChange: (id: string) => void
}

const Favorites: React.FC<FavoritesProps> = ({ items, favorites, handleChange }) => (
  <>
    <Table title="Favorited repositories" items={items} favorites={favorites} handleChange={handleChange} />
  </>
)

export default Favorites