import Container from "components/Container";
import Rodape from "components/Rodape";
import Cabecalho from "components/cabecalho";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;