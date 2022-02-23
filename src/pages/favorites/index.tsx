import { useMemo } from 'react'
import Table from '../../components/table'

type HomeProps = {
  items: any
}

const Home: React.FC<HomeProps> = ({ items }) => (
  <>
    <Table title="Repositories" items={items} />
  </>
)

export default Home