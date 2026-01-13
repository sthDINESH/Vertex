const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 flex justify-center w-full bg-linear-to-b to-white/10 backdrop-blur">
      <div className="container w-full">
        <div className="flex items-center py-2 border-b-2 border-white">
          <div className="nav-brand-container">
            <div className="accent-text text-white text-xl md:text-2xl lg:text-3xl">Vertex</div>
          </div>
          <div className="nav-link-container ml-auto">
            <ul>
              <li>
                Login
              </li>
            </ul>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar