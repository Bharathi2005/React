const Navbar = ({ Name }) => {

    console.log(Name)
    return (
        <>
        <div className="w-full h-[10vh] bg-yellow-200 text-black font-bold  flex justify-start items-start gap-4">
            {Name}
        </div>
        
        </>
        
    )
}

export default Navbar;