import { useState, useEffect } from 'react'
import { getProductById } from '@/mocks/asyncMock'
import { useParams } from 'react-router-dom'

// Componentes
import ItemDetail from '../ItemDetail'
import Footer from '@/modules/layout/Footer'

function ItemDetailContainer () {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProductById(productId)
      .then((response) => {
        setProduct(response)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [productId])

  return (
    <>
      <div
        className='flex flex-col items-center w-full gap-4'
      >
        {
          loading
            ? <p>Cargando...</p>
            : <ItemDetail {...product} />
        }
      </div>
      {/* TODO: Ver por qué no renderiza el Footer que está en App.jsx cuando está en la página de producto */}
      <Footer />
    </>
  )
}

export default ItemDetailContainer
