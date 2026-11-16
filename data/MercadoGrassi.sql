USE DBGrassi;

CREATE TABLE Usuario (
ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
senha VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
perfil ENUM('Gestor' , 'Funcionario') NOT NULL DEFAULT 'Funcionario',
estaAtivo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE Produto(
ID_Produto INT AUTO_INCREMENT PRIMARY KEY,
Codigo VARCHAR(50) NOT NULL UNIQUE,
Nome VARCHAR(100) NOT NULL,
Categoria VARCHAR(50) NOT NULL,
UnidadeVenda VARCHAR(20) NOT NULL,
Preco DECIMAL(10, 2) NOT NULL,
Imagem VARCHAR(455),
EstaAtivo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE Ocorrencia (
ID_Ocorrencia INT AUTO_INCREMENT PRIMARY KEY,
ProdutoErrado INT NOT NULL,
ProdutoCerto INT NOT NULL,
Quant DECIMAL(10, 3) NOT NULL,
Diferenca DECIMAL(10, 2) NOT NULL,
DataHora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
Usuario INT NOT NULL,
CONSTRAINT FK_Ocorr_Prod_Errado FOREIGN KEY (ProdutoErrado) REFERENCES Produto(ID_Produto ),
CONSTRAINT FK_Ocorr_Prod_Certo FOREIGN KEY (ProdutoCerto) REFERENCES Produto(ID_Produto ),
CONSTRAINT FK_Ocorr_Usuario FOREIGN KEY (Usuario) REFERENCES Usuario(ID_Usuario)
);

INSERT INTO usuario (nome, senha, email, perfil, estaAtivo) VALUES
('Carlos Silva', '12345', 'carlos@empresa.com', 'Funcionario', TRUE),
('Ana Souza', '123456', 'ana@empresa.com', 'Gestor', TRUE);

INSERT INTO produto (codigo, nome, categoria, unidadeVenda, preco, imagem, estaAtivo) VALUES
('7890001', 'Arroz Branco 5kg', 'Mercearia', 'UN', 25.50, 'https://loja.cestanobre.com.br/produtos/arroz-tipo-1-camil-5kg?srsltid=AYCX9vLGegvsQED2fGErilSfLXHOmNcCaLiN0nohgRx6BmqrXfxqdrLj', TRUE),
('7890002', 'Arroz Parboilizado 5kg', 'Mercearia', 'UN', 27.00, 'https://www.lojacentraldealimentos.com.br/arroz-parboilizado-tio-urbano-5kg?srsltid=AYCX9vL_d6ytr4zI4t8i616504qRGppucbVAte3KNcUDGIOM0Fmbg7XR', TRUE),
('7890003', 'Feijão Carioca 1kg', 'Mercearia', 'UN', 8.50, 'https://mercado.carrefour.com.br/produto/feijao-carioca-tipo-1-kicaldo-1kg-2967', TRUE),
('7890004', 'Feijão Preto 1kg', 'Mercearia', 'UN', 9.00, 'https://mercado.carrefour.com.br/produto/feijao-carioca-tipo-1-kicaldo-1kg-2967', TRUE);

INSERT INTO ocorrencia (produtoErrado, produtoCerto, quant, diferenca, dataHora, usuario) VALUES
(1, 2, 2.000, 3.00, '2026-10-20', 1),
(3, 4, 5.000, 2.50, '2026-10-20', 1),
(2, 1, 1.000, -1.50, '2026-10-21', 2),
(4, 3, 3.000, -1.50, '2026-10-21', 1),
(1, 3, 1.000, -17.00, '2026-10-22', 2),
(3, 1, 2.000, 34.00, '2026-10-22', 2);