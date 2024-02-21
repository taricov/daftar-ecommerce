import { useLoading } from '../../components/commonUI/GlobalLoader/LoadingProvider.tsx'

function Shop() {
  const { loading } = useLoading();
  
  return (
    <>
  {loading && <div>Loading...</div>}
    <div>
      Shop
    </div>
</>
  )
}

export default Shop