import Users from "../components/Users"
import Products from "../components/Products"

export default function dashboard() {
  return (
    <div className='mx-auto px-5 bg-slate-50'>
      <h1 className="text-xl p-5">Dashboard</h1>
      <hr />
      <div className='mt-5 items-center'>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 border rounded-lg bg-white shadow">

            <div className="flex">
              <Users />
            </div>
            
            
          </div>
          <div className="p-5 border rounded-lg bg-white shadow text-center">
            Something
            Something
            Something
          </div>
          <div className="p-5 border rounded-lg bg-white shadow text-center">
            <Products />
          </div>
          <div className="p-5 border rounded-lg bg-white shadow text-center">
            Something
            Something
            Something
          </div>
        </div>
      </div>
    </div>

  )
}
