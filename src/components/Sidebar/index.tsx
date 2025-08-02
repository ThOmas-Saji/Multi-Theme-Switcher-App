import AppLinks from "../UiComponents/NavLink/AppLinks";

const Sidebar = () => (

    <>
        <aside
            className={`
          fixed top-0 left-0 h-full shadow shadow-amber-50 bg-gray-900 p-4 pt-20 space-y-4 z-50 
          transform transition-transform duration-300 lg:translate-x-0 lg:w-64
        `}
        >
            <h2 className="text-2xl font-bold">Menu</h2>
            <AppLinks className='flex flex-col gap-2' />
        </aside>
    </>
);
export default Sidebar;