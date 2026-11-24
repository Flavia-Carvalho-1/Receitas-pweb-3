import { FormularioBusca } from "./componentes"

export default function FilmesLayout({ children }) {

    return (

        <div>

            <FormularioBusca />

            {children}

        </div>

    )

}