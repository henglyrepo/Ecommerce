import SideMenu from './components/SideMenu'
import Dashboard from './dashboard/home'

export default function adminLayout() {
    return (
      <>
      <div className="max-w-screen flex">
        <div>
          <SideMenu />
        </div>
        <div className="w-full h-full">
          <Dashboard />
        </div>
      </div>
      </>
    )  
  }