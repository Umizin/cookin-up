import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
  }
export async function obterReceitas(){
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/Umizin/55c72beb9748cabe314602227a3fa631/raw/30d08c6cdb11452b2159d1feb6bcf2f0dbe863f0/gistfile1.txt');
}
