export interface Produto {
    codigo : number;
    descricao : string;
    marca: string;
    preco : number;
}

export interface ProdutoCriacaoDto {
    descricao : string;
    marca: string;
    preco : number;
}

export interface ProdutoUpdateDto {
    descricao : string;
}