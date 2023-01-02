import Navbarf from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { Route, Routes } from "react-router-dom";
import { ClientPage } from "./M2.Ventas/CU5.Clientes/ClientPage";
import { ClientContextProvider } from "./M2.Ventas/CU5.Clientes/ClientProvider";
import { ProveedorContextProvider } from "./M3.Inventario/CU11.GestProveedor/ProveedorProvider";
import { ProveedorPage } from "./M3.Inventario/CU11.GestProveedor/ProveedorPage";
import { UsuarioProvider } from "./M1.Usuarios/CU3.Usuarios/Usuario.provider";
import { PageUsuario } from "./M1.Usuarios/CU3.Usuarios/component.PageUsuario";
import { RolProvider } from "./M1.Usuarios/CU4.Roles/Roles.provider";
import { PageRol } from "./M1.Usuarios/CU4.Roles/component.PageRol";
import { EmpleadoProvider } from "./M1.Usuarios/CU20.Empleados/Empleados.provider";
import { PageEmpleado } from "./M1.Usuarios/CU20.Empleados/component.PageEmpleado";
import { PageProducto } from "./M2.Ventas/CU6.Producto/component.PageProducto";
import { ProductoContextProvider } from "./M2.Ventas/CU6.Producto/Producto.provier";
import { PedidoContextProvider } from "./M2.Ventas/CU7.Pedido/Pedido.provider";
import { PagePedido } from "./M2.Ventas/CU7.Pedido/component.PagePedido";
import { MatPrimaContextProvider } from "./M3.Inventario/CU12.GestMatPrima/MatPrima.provider";
import { PageMatPrima } from "./M3.Inventario/CU12.GestMatPrima/component.PageMatPrima";
import { UniMedidaContextProvider } from "./M3.Inventario/CU14.UniMedida/UniMedida.provider";
import { PageUniMedida } from "./M3.Inventario/CU14.UniMedida/component.PageUniMedida";
import { CompraContextProvider } from "./M3.Inventario/CU15.GestCompra/Compra.provider";
import { PageCompra } from "./M3.Inventario/CU15.GestCompra/component.PageCompra";

const App = () => {
  return (
    <div className="containerApp">
      <Navbarf />
      <UsuarioProvider>
        <Routes>
          <Route path="JhakuFront/" element={<Main />} />
          <Route path="JhakuFront/usuarios" element={<PageUsuario />} />
        </Routes>
      </UsuarioProvider>
      <RolProvider>
        <Routes>
          <Route path="JhakuFront/roles" element={<PageRol />} />
        </Routes>
      </RolProvider>
      <EmpleadoProvider>
        <Routes>
          <Route path="JhakuFront/personal" element={<PageEmpleado />} />
        </Routes>
      </EmpleadoProvider>
      <ClientContextProvider>
        <Routes>
          <Route path="JhakuFront/clientes" element={<ClientPage />} />
        </Routes>
      </ClientContextProvider>
      <ProductoContextProvider>
        <Routes>
          <Route path="JhakuFront/producto" element={<PageProducto />} />
        </Routes>
      </ProductoContextProvider>
      <PedidoContextProvider>
        <Routes>
          <Route path="JhakuFront/pedido" element={<PagePedido />} />
        </Routes>
      </PedidoContextProvider>
      <ProveedorContextProvider>
        <Routes>
          <Route path="JhakuFront/proveedor" element={<ProveedorPage />} />
        </Routes>
      </ProveedorContextProvider>
      <MatPrimaContextProvider>
        <Routes>
          <Route path="JhakuFront/matprima" element={<PageMatPrima />} />
        </Routes>
      </MatPrimaContextProvider>
      <UniMedidaContextProvider>
        <Routes>
          <Route path="JhakuFront/unidadmedida" element={<PageUniMedida />} />
        </Routes>
      </UniMedidaContextProvider>
      <CompraContextProvider>
        <Routes>
          <Route path="JhakuFront/compra" element={<PageCompra />} />
        </Routes>
      </CompraContextProvider>
    </div>
  );
};

export default App;
