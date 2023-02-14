/*CRIAR TABELA, PASSANDO OS NOMES DAS TABELAS E SEUS TIPOS*/

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/*INSERIR DADOS NA TABELA, PASSANDO AS COLUNAS QUE SERÃO AFETADAS COMO PARAMS E OS VALORES EM VALUES*/
INSERT INTO usuarios (nome, email, idade) VALUES(
    'thomas',
    'thomas@gmail.com',
    22
);

/*SELECIONAR TODOS OS DADOS CADASTRADOS NA TABELA 'USUARIOS'*/
SELECT * FROM usuarios;

/*SELECIONAR DADOS QUE ATENDAM AO FILTRO 'WHERE'*/
SELECT * FROM usuarios WHERE idade = 24;
SELECT * FROM usuarios WHERE idade >= 5;
SELECT * FROM usuarios WHERE nome = 'thomas' AND idade = 22;
SELECT * FROM usuarios WHERE nome = 'eliakim' OR idade = 24;

/*DELETAR DADOS DA TABELA QUE ATENDAM AO FILTRO*/
DELETE FROM usuarios WHERE nome = 'thomas';
DELETE FROM usuarios WHERE idade >= 10;

/*ATUALIZAR DADOS INSERIDOS*/
UPDATE usuarios SET nome = 'Novo Nome' WHERE nome = 'thomas';
