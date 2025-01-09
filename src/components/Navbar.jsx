const Navbar = () => {

  return (
    <header className="flex justify-between items-center md:p-4 bg-white border shadow-sm">
      <div className="flex items-center">
        <img src="/Whoosh Teal (RGB).png" alt="Icon" className="md:h-[3rem] mr-2" />
        <img src="/DesAcc_logo_rgb_horizontal_with line_delft blue1.png" alt="Desacc title" className="md:h-[3rem]" />
        {/* md:ml-28 */}
      </div>
    </header>
  );
};

export default Navbar;