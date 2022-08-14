import ReactStars from "react-rating-stars-component";

function Card({item,CartItem,handaddCart}) {

    return (
        <>
            {/* <div className="col mb-5">
                <div className="card h-100 ">
                    {
                        item.isSale ? <div className="badge bg-success text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div> : <div className="badge bg-danger text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Out of Sale</div>
                    }
                    <img className="card-img-top" src={item.image} alt="Loading.." />
                    <div className="card-body p-3">
                        <div className="text-center">
                            <h5 className="fw-bolder">{item.product[0].type}</h5>
                            {item.product[1].rating}
                            <br/>
                            {
                                !item.product.isOffer ?<s className="text-muted">{item.product[2].offer}</s> : ""
                            }   {item.product[3].price}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button disabled={!item.isSale ? true : false } className="btn btn-outline-dark mt-auto">{item.product[4].button}</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col-lg-4 g-2">
            <div class="card h-100 bg-dark bg-opacity-10  " style={{ width: "15rem" }}>
                {
                    item.isSale ? <div className="badge bg-success text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> : <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Out of Sale</div>
                }
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.product[0].type}</h5>
                    <div className="ms-5"><ReactStars classNames="justify-content-center" count={5} size={28} value={item.product[1].rating}  isHalf={true} activeColor="red" />
</div>
                    <br />
                    {
                        !item.product.isOffer ? <s className="text-muted">{item.product[2].offer}</s> : ""
                    }   {item.product[3].price}

                    <div className="mt-2">
                        <button disabled={!item.isSale || CartItem.some((obj)=>obj.id==item.id)? true : false} onClick={()=>{handaddCart(item)}} className="btn btn-outline-dark mt-auto">{item.product[4].button}</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card;