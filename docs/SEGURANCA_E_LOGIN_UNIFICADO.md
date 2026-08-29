# Segurança e migração institucional — XI SAM

## Estado desta fase

O repositório foi transferido para `itairanterres-gif/xi-sam-unidavi-v2` e está privado.

Mitigações aplicadas nesta branch:

- a senha da curadoria deixou de ser persistida em `localStorage`;
- o PIN local e público `1234` foi removido;
- os controles de exibição local só aparecem com `?painel=1` e não são apresentados como autenticação;
- o link para adicionar materiais deixou de transportar token na URL e agora direciona ao fluxo autenticado pelo Google.

## Riscos ainda abertos

### Curadoria no Apps Script

O frontend ainda envia e-mail e senha ao Google Apps Script:

- no login, por uma requisição GET;
- nas decisões editoriais e ajustes de layout, no corpo de requisições POST.

A remoção completa desse mecanismo exige localizar o código-fonte do Apps Script, confirmar sua propriedade institucional e substituir a autenticação compartilhada por identidade individual. Até isso ocorrer, a senha não deve ser reutilizada em outros serviços.

### Links de edição

O fluxo de edição da submissão ainda usa `id` e `token` no fragmento da URL. Ele deve ser substituído por sessão autenticada e autorização por proprietário quando o backend for migrado. O token não deve aparecer em logs, capturas públicas ou mensagens encaminhadas.

### Backend fora do repositório

O endpoint atual é um Google Apps Script externo. O repositório, isoladamente, não contém código suficiente para auditar autorização, armazenamento, expiração de tokens, e-mails ou tratamento dos arquivos enviados.

## Direção para login unificado

O domínio `@unidavi.edu.br` comprova vínculo de identidade, mas não concede automaticamente acesso a uma função. A autorização deve combinar:

1. login institucional;
2. lista institucional ativa;
3. função atribuída pelo servidor;
4. políticas de acesso no banco.

A lista atualizada de alunos não deve ser commitada no GitHub nem incorporada ao frontend.

Campos mínimos sugeridos para a lista institucional:

- `email_normalized`;
- `active`;
- `role` (`student`, `teacher`, `curator`, `operator`, `admin`);
- `phase`;
- `cohort`;
- `valid_from`;
- `valid_until`;
- `source_batch`;
- datas de criação e atualização.

Papéis administrativos devem ser controlados pelo servidor, nunca por `user_metadata` editável pelo usuário.

## Supabase institucional

A conexão institucional atualmente apresenta os projetos `treino-enamed` e `sessao-questoes-unidavi`. Nenhum deles deve receber dados do XI SAM por conveniência.

Antes de criar ou escolher um projeto para o XI SAM, deve-se comparar:

- ciclo de vida e proprietários dos dados;
- usuários e papéis;
- necessidade de isolamento;
- retenção de arquivos;
- custos e limites;
- possibilidade real de um serviço institucional compartilhado de identidade.

A decisão entre projeto próprio do XI SAM e serviço institucional compartilhado deve preceder qualquer migração de dados.

## Controles obrigatórios na futura migração

- RLS habilitada em toda tabela exposta;
- políticas com predicado de propriedade, não apenas `TO authenticated`;
- `USING` e `WITH CHECK` em atualizações;
- funções privilegiadas fora de schemas expostos e com permissões mínimas;
- views públicas com `security_invoker = true`;
- chave `service_role` nunca exposta no navegador;
- acesso público somente por views ou endpoints deliberadamente limitados;
- auditoria de ações de curadoria;
- revogação e validade de vínculos institucionais;
- importação da lista de alunos com verificação de duplicatas, e-mails inválidos e conflitos de fase.

## Próxima sequência segura

1. inventariar e preservar o código do Apps Script;
2. documentar tabelas, planilhas, pastas e proprietários atuais;
3. decidir se o XI SAM terá projeto Supabase próprio;
4. modelar identidade, lista institucional e papéis;
5. migrar primeiro em ambiente de teste;
6. validar RLS e fluxos por perfil;
7. realizar corte controlado, mantendo cópia de retorno;
8. revogar o mecanismo antigo somente após verificação.
