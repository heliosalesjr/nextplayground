'use client'
import { useState } from "react"


function ClientPage() { // Define a função do componente ClientPage
    // Declara uma variável de estado chamada 'count' e uma função para atualizá-la 'setCount'. 
    // O valor inicial do estado é 0.
    const [count, setCount] = useState(0); 

    return (
        <div className="max-w-3xl mx-auto"> {/* Uma div com estilos CSS para centralizar o conteúdo */}
            <h1 className="text-7xl mb-8 text-center">{count}</h1> {/* Título exibindo o valor de 'count' */}
            <div className="flex justify-center gap-8"> {/* Uma div com estilos flexíveis para centralizar os botões horizontalmente */}
                {/* Botão para incrementar 'count' quando clicado */}
                <button className="btn" onClick={() => setCount(count + 1)}>increase</button>
                {/* Botão para decrementar 'count' quando clicado */}
                <button className="btn" onClick={() => setCount(count - 1)}>decrease</button>
            </div>
        </div>
    );
}

export default ClientPage; // Exporta o componente ClientPage para ser utilizado em outros arquivos