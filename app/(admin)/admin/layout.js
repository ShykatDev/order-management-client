import AppSidebar from '@/components/common/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const AdminLayout = ({children}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <SidebarTrigger />
        <div className='px-10'>
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout