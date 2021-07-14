import React from "react";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div id="search" className="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form>
          <input type="text" name="search" />
          <input type="submit" name="submit" value="Buscar" className="btn" />
        </form>
      </div>
    </aside>

    // <div class="clearfix"></div>
  );
}
export default Sidebar;
