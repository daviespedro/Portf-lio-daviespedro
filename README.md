# Portfólio — Pedro Davies

Portfólio estático em HTML, CSS e JavaScript, com projetos, habilidades,
eventos, certificados e contatos.

## Publicação no GitHub Pages

1. Envie os arquivos para a branch `main` do repositório
   `daviespedro/Portf-lio-daviespedro`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione **main** e **/ (root)** e clique em **Save**.
5. Aguarde a publicação e abra o endereço exibido pelo GitHub.

Endereço padrão esperado:
https://daviespedro.github.io/Portf-lio-daviespedro/

Não há instalação de dependências nem comando de build. O arquivo `.nojekyll`
mantém a publicação estática, e os caminhos relativos de CSS, imagens e
certificados permitem servir o portfólio na subpasta do repositório.

## Migração da Vercel

Depois de conferir o portfólio no GitHub Pages, remova da Vercel somente o
projeto que hospeda este portfólio. Os links para projetos como Mundo Pet,
Forja e New Life continuam apontando para suas próprias hospedagens.

## Prévia local

Na pasta do portfólio, execute:

```sh
python3 -m http.server 4179 --bind 127.0.0.1
```

Abra http://127.0.0.1:4179 no navegador.
