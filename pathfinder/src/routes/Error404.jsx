import { Main, H1, P } from "../styles/globalStyles";

function Error404() {
    return (
        <Main>
            <H1>Erro 404</H1>
            <P $align="center">Rota não encontrada</P>
        </Main>
    );
}

export default Error404;