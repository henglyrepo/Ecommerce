
export default function cart() {
  return (
    
    <div className="w-full" >
        <h1 className="text-xl text-blue-500 font-bold mx-auto text" >Cart</h1>
        <table class="border-separate border-spacing-10 shadow rounded-lg my-5 border-slate-500 ...">
            <thead class="bg-blue-500 text-white ">
                <tr class="">
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                <td>0001</td>
                <td>bag</td>
                <td><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="w-10" /></td>
                <td>$35</td>
                <td>1</td>
                <td>$35</td>
                </tr>

            </tbody>
        </table>
    </div>

  )
}
