import Table from '../../components/table'

type HomeProps = {
  items: any;
  favorites: any;
  handleChange: (id: string) => void
}

const Home: React.FC<HomeProps> = ({ items, favorites, handleChange }) => (
  <>
    <Table title="Repositories" items={items} favorites={favorites} handleChange={handleChange} />
  </>
)


export default Home
