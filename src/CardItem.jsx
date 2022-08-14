function CartItem({item,Removecart}) {
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start gg-dark bg-opacity-10">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{item.product[0].type}</div>
                    {item.product[3].price}
                </div>
                <button class="badge bg-danger text-white rounded-pill" onClick={()=>{Removecart(item)}}>X</button>
            </li>
        </>
    );
}
export default CartItem;