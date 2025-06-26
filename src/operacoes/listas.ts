export function itensDeLista1EstaoEmLista2(lista1: string[], lista2: string[]): boolean {
    const normalizar = (str: string) => str.trim().toLowerCase();
  
    const ingredientesDisponiveis = new Set(lista2.map(normalizar));

    return lista1.every(ingredienteDaReceita => 
      ingredientesDisponiveis.has(normalizar(ingredienteDaReceita))
    );

}