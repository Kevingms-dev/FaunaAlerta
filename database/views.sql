CREATE VIEW vw_documento_pesquisador AS
SELECT d.tipo, d.caminho_arquivo, p.instituicao
FROM Documentos_verificacao d
INNER JOIN Pesquisadores p ON p.usuario_id = d.usuario_id;

CREATE VIEW vw_documento_orgao AS
SELECT u.nome, d.tipo, d.caminho_arquivo, o.razao_social
FROM Documentos_verificao d
INNER JOIN Orgao o ON o.id = u.orgao_id
INNER JOIN Usuario u ON u.orgao_id = o.id;