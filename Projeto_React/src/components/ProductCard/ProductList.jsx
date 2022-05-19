import ProductCard from './ProductCard'
import { list } from './List'

// import './ProductCard.css'

function ProductList() {

    const getProductList = () => {
        return list.map(item => {
            return (
                <ProductCard
                    brand={item.brand}
                    model={item.model}
                    color={item.color}
                    year={item.year}
                    engine={item.engine}
                    potency={item.potency}
                    price={item.price}
                    fuel={item.fuel}
                    inventory={item.inventory}
                    enphasis={item.enphasis}
                    image={item.image} />
            )
        })
    }

    return (
        <>
            <div className="container shadow col-12 col-md-12 col-lg-12">

                <div className="row btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-1">
                    {/* link entre Modal e Card */}
                    <div className="row justify-content-around mx-0">
                        {getProductList()}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductList