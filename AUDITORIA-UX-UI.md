# Auditoria UX/UI — Douro & Salamanca

## Diagnóstico

A landing da Grécia concentra a experiência em 6 seções e aproximadamente 7,4 viewports no desktop observado. O roteiro com 12 destinos é explorável, e não verticalizado. A página atual do Douro tinha 13 capítulos, todos com peso visual semelhante; a direção era editorial, porém a duração percebida e a repetição estrutural comprometiam o ritmo.

## Problemas encontrados

- **Treze capítulos equivalentes:** faltava hierarquia entre narrativa principal e contexto secundário.
- **Fadiga após gastronomia:** Salamanca, cultura, hospedagem, mapa, galeria, roteiro e informações criavam uma segunda metade mais longa que a primeira.
- **Repetição imagem + título + parágrafo:** boa isoladamente, previsível em sequência.
- **Mapa e roteiro redundantes:** ambos explicavam o percurso separadamente.
- **Salamanca subdimensionada:** era um bloco cromático, não uma verdadeira mudança de território.
- **Mobile empilhado:** capítulos desktop apenas se acumulavam verticalmente.
- **Imagens repetidas:** o acervo inicial ainda é curto e exige uso mais seletivo.

## O que manter

- Hero ensolarado e título “O tempo corre diferente no Douro”.
- Paleta mais viva: azul Douro, vinho, terracota e dourado.
- Tipografia serif editorial + sans legível.
- Narrativa do rio como fio condutor.
- Ausência de CTA comercial.
- Imagens humanas e da adega para quebrar a paisagem.

## O que eliminar ou condensar

- Manifesto independente → incorporado ao hero e à jornada.
- Cultura e história → integradas em Salamanca e roteiro.
- Mapa separado → fundido com introdução da jornada.
- Galeria e momentos → uma única sequência de três imagens.
- Hospedagem + informações → um único bloco essencial com accordions.
- Oito dias verticais → seletor explorável compacto.

## Nova arquitetura

1. Hero cinematográfico
2. Jornada + mapa
3. Douro: paisagem, quintas e vinho
4. À mesa: gastronomia e convivência
5. Portugal → Espanha
6. Salamanca
7. Momentos + roteiro explorável
8. Essencial + Emerald Radiance
9. Epílogo visual

## Comparação

| Critério | Grécia | Douro anterior | Douro proposto |
|---|---|---|---|
| Ritmo | Direto, 6 seções | 13 capítulos equivalentes | 9 momentos com escalas variadas |
| Quantidade de texto | Baixa | Média-alta | Baixa, 30–55 palavras por bloco |
| Número de seções | 6 | 13 | 9 |
| Impacto visual | Alto, verão e mar | Alto, mas repetitivo | Alto, rio + mesa + cidade |
| Storytelling | Destinos → iate → info | Muitos capítulos paralelos | Rio → mesa → travessia → cidade |
| Mobile | Roteiro horizontal compacto | Empilhamento longo | Seletor simples e blocos condensados |
| Navegação | Utilitária | Editorial extensa | Quatro âncoras discretas |
| Variedade visual | Mar, ilhas, iate | Predomínio do Douro | Paisagem, adega, pessoas, arquitetura |
| Sofisticação | Solar e dinâmica | Editorial contemplativa | Editorial, adulta e ritmada |
| Duração percebida | Curta | Longa | Média-curta |

## Fatigue Check

| Problema | Impacto | Solução |
|---|---|---|
| Três capítulos conceituais antes do conteúdo prático | O usuário acelera cedo | Jornada e mapa reunidos logo após o hero |
| Vinhedo repetido | Imagens deixam de surpreender | Apenas um panorama; depois adega, pessoas e cidade |
| Salamanca após muitos blocos | Mudança de país perde força | Travessia colocada no centro exato da narrativa |
| Galeria seguida do roteiro | Dois inventários consecutivos | Galeria curta e roteiro interativo compacto |
| Informações fragmentadas | Final burocrático e longo | Um bloco essencial com accordions |
| Títulos grandes em todas as telas | Hierarquia se torna monótona | Alternância entre panorama, grid, faixa e interação |

## Desktop

- Full bleed no hero, Douro, Salamanca e epílogo.
- Composições assimétricas e largura integral.
- Roteiro explorável sem criar oito seções.
- Travessia horizontal como pausa gráfica.
- Máximo aproximado de uma ideia por viewport.

## Mobile

- Textos reduzidos e títulos responsivos.
- Roteiro em lista de toque confortável, sem gesto horizontal obrigatório.
- Informações secundárias em accordion.
- Imagens próprias de hero mobile.
- Sem scroll hijacking, vídeo ou animação pesada.

## Performance

- Hero prioritário; demais imagens com lazy loading.
- Zero biblioteca de animação e JavaScript limitado a roteiro e accordions.
- Respeito a `prefers-reduced-motion`.
- Próxima etapa recomendada: converter PNGs finais para AVIF/WebP após aprovação visual.
