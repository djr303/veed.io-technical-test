import Table from '../../components/table'

type HomeProps = {
  items: any
}

const Home: React.FC<HomeProps> = ({ items }) => (
  <>
    <Table items={items} title="Repositories" />
  </>
)

export default Home