// Define as dimensões do grafico: se o grafo aparecer cortado, tem de aumentar os valores
var width = 1250, height = 580, constant = 100;

// Os vértices
var nodes = [
    /*
        label é o nome sob o vértice (não modificar label 'UFC');
        constant é a movimentação horizontal dos vértices;
        y é a movimentação vertical;
        width e height são com relação ao retângulo que a label fica sobre.
    */
    { label: 'UFC', x: constant, y: 215, width: 70, height: 50 },
    { label: '1C', x: constant, y: 375, width: 70, height: 50 },
    { label: '1B', x: 2.5 * constant, y: 215, width: 70, height: 50 },
    { label: '2B', x: 4 * constant, y: 215, width: 70, height: 50 },
    { label: '2C', x: 2.5 * constant, y: 375, width: 70, height: 50 },
    { label: '1A', x: constant, y: 50, width: 70, height: 50 },
    { label: '2A', x: 2.5 * constant, y: 50, width: 70, height: 50 },
    { label: '4A', x: 5.5 * constant, y: 50, width: 70, height: 50 },
    { label: '3A', x: 4 * constant, y: 50, width: 70, height: 50 },
    { label: '3C', x: 4 * constant, y: 375, width: 70, height: 50 },
    { label: '3B', x: 5.5 * constant, y: 215, width: 70, height: 50 },
    { label: '4C', x: 5.5 * constant, y: 375, width: 70, height: 50 },
    { label: '5A', x: 7 * constant, y: 50, width: 70, height: 50 },
    { label: '4B', x: 7 * constant, y: 215, width: 70, height: 50 },
    { label: '5C', x: 7 * constant, y: 375, width: 70, height: 50 },
    { label: '6A', x: 8.5 * constant, y: 50, width: 70, height: 50 },
    { label: '5B', x: 8.5 * constant, y: 215, width: 70, height: 50 },
    { label: '6C', x: 8.5 * constant, y: 375, width: 70, height: 50 },
    { label: '7A', x: 10 * constant, y: 50, width: 70, height: 50 },
    { label: '6B', x: 10 * constant, y: 215, width: 70, height: 50 },
    { label: '7C', x: 10 * constant, y: 375, width: 70, height: 50 },
    { label: '8A', x: 11.5 * constant, y: 50, width: 70, height: 50 },
    { label: '7B', x: 11.5 * constant, y: 215, width: 70, height: 50 },
    { label: '8B', x: 11.5 * constant, y: 375, width: 70, height: 50 },
    { label: '2D', x: constant, y: 530, width: 70, height: 50 },
    { label: '3D', x: 2.5 * constant, y: 530, width: 70, height: 50 },
    { label: '4D', x: 4 * constant, y: 530, width: 70, height: 50 },
    { label: '5D', x: 5.5 * constant, y: 530, width: 70, height: 50 },
    { label: '6D', x: 7 * constant, y: 530, width: 70, height: 50 },
    { label: '7D', x: 8.5 * constant, y: 530, width: 70, height: 50 },
    { label: '8C', x: 10 * constant, y: 530, width: 70, height: 50 },
    { label: '9A', x: 11.5 * constant, y: 530, width: 70, height: 50 }
];

// As arestas
var links = [
    /*
        source é o ponto de partida da aresta;
        target é o alvo da aresta;
        (Apesar disso, acredito que ela seja bidirecional, [s,t] = [t,s])
        weight é o peso da aresta;
        name é o nome da aresta.
    */
    { source: 0, target: 1, weight: 5, name: 'Rua Sofia' },
    { source: 0, target: 2, weight: 3, name: 'Rua Bia' },
    { source: 0, target: 5, weight: 6, name: 'Rua Jerry' },
    { source: 1, target: 4, weight: 7, name: 'Rua Ian' },
    { source: 1, target: 24, weight: 5, name: 'Rua Dario' },
    { source: 2, target: 3, weight: 8, name: 'Rua Bia' },
    { source: 2, target: 4, weight: 4, name: 'Rua Sofia' },
    { source: 3, target: 10, weight: 1, name: 'Rua Bia' },
    { source: 3, target: 8, weight: 3, name: 'Rua Jerry' },
    { source: 3, target: 9, weight: 6, name: 'Rua Sofia' },
    { source: 4, target: 9, weight: 5, name: 'Rua Ian' },
    { source: 4, target: 25, weight: 4, name: 'Rua Dario' },
    { source: 5, target: 6, weight: 2, name: 'Rua Tom' },
    { source: 6, target: 2, weight: 9, name: 'Rua Jerry' },
    { source: 6, target: 8, weight: 7, name: 'Rua Tom' },
    { source: 7, target: 10, weight: 5, name: 'Rua Jerry' },
    { source: 7, target: 12, weight: 8, name: 'Rua Tom' },
    { source: 8, target: 7, weight: 3, name: 'Rua Tom' },
    { source: 9, target: 11, weight: 7, name: 'Rua Ian' },
    { source: 9, target: 26, weight: 4, name: 'Rua Dario' },
    { source: 10, target: 11, weight: 1, name: 'Rua Sofia' },
    { source: 10, target: 13, weight: 4, name: 'Rua Bia' },
    { source: 11, target: 14, weight: 6, name: 'Rua Ian' },
    { source: 11, target: 27, weight: 2, name: 'Rua Dario' },
    { source: 12, target: 13, weight: 8, name: 'Rua Jerry' },
    { source: 12, target: 15, weight: 2, name: 'Rua Tom' },
    { source: 13, target: 16, weight: 3, name: 'Rua Bia' },
    { source: 13, target: 14, weight: 7, name: 'Rua Sofia' },
    { source: 14, target: 17, weight: 8, name: 'Rua Ian' },
    { source: 14, target: 28, weight: 6, name: 'Rua Dario' },
    { source: 15, target: 16, weight: 9, name: 'Rua Jerry' },
    { source: 15, target: 18, weight: 5, name: 'Rua Tom' },
    { source: 16, target: 17, weight: 6, name: 'Rua Sofia' },
    { source: 16, target: 19, weight: 7, name: 'Rua Bia' },
    { source: 17, target: 20, weight: 1, name: 'Rua Ian' },
    { source: 17, target: 29, weight: 8, name: 'Rua Dario' },
    { source: 18, target: 19, weight: 6, name: 'Rua Jerry' },
    { source: 18, target: 21, weight: 3, name: 'Rua Tom' },
    { source: 19, target: 20, weight: 9, name: 'Rua Sofia' },
    { source: 19, target: 22, weight: 4, name: 'Rua Bia' },
    { source: 20, target: 23, weight: 2, name: 'Rua Ian' },
    { source: 20, target: 30, weight: 8, name: 'Rua Dario' },
    { source: 21, target: 22, weight: 7, name: 'Rua Jerry' },
    { source: 22, target: 23, weight: 9, name: 'Rua Sofia' },
    { source: 23, target: 31, weight: 8, name: 'Rua Dario' },
    { source: 24, target: 25, weight: 5, name: 'Rua Ana' },
    { source: 25, target: 26, weight: 1, name: 'Rua Ana' },
    { source: 26, target: 27, weight: 3, name: 'Rua Ana' },
    { source: 27, target: 28, weight: 7, name: 'Rua Ana' },
    { source: 28, target: 29, weight: 2, name: 'Rua Ana' },
    { source: 29, target: 30, weight: 9, name: 'Rua Ana' },
    { source: 30, target: 31, weight: 8, name: 'Rua Ana' }
];

// Cria o elemento svg no corpo da página onde o grafo será desenhado
var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

/*
    Um layout de D3.js para organizar os vértices e arestas.
    Define o tamanho da área, os vértices, as arestas e a
    distância entre vértices com base no peso da aresta.
*/
var force = d3.layout.force()
    .size([width, height]) // 
    .nodes(nodes)
    .links(links)
    .linkDistance(function (d) { return d.weight * 30; });

/* 
    Cada aresta é representada como uma linha (line).
    Usa o array de arestas para desenhar as linhas;
    para cada aresta, uma linha SVG é adicionada.
    Define a espessura e opacidade das linhas.
*/
var link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link')
    .style("stroke-width", "5px")
    .style("opacity", "0.7");

// Coloca o nome da rua e o peso no meio da linha da aresta.
var linkText = svg.selectAll('.link-text')
    .data(links)
    .enter().append('text')
    .attr('class', 'link-text')
    .attr('x', function (d) { return (d.source.x + d.target.x) / 2; })
    .attr('y', function (d) { return (d.source.y + d.target.y) / 2; })
    .text(function (d) { return d.name + ' (' + d.weight + ')'; });

// Cada vértice é representado por um grupo (<g>) contendo um retângulo e um texto
var node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node')
    // Posiciona o vértice na tela
    .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    })
    // Evento que altera a cor do vértice clicado e dispara o cálculo do menor caminho.
    .on("click", function (d) {
        d3.selectAll(".node rect").style("fill", "#2376B2");
        d3.select(this).select("rect").style("fill", "#ff7f0e");
        calculateShortestPath(d);
    });

// Cada nó é desenhado como um retângulo arredondado com dimensões e cor inicial definidas.
node.append("rect").attr("class", "nodeRect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr('width', function (d) { return d.width; })
    .attr('height', function (d) { return d.height; })
    .style("fill", "#2376B2");

// Coloca a label do vértice no centro do retângulo.
node.append("text").style("text-anchor", "middle")
    .style("pointer-events", "none")
    .style("font-weight", 900)
    .attr("fill", "white")
    .style("stroke-width", "0.3px")
    .style("font-size", "16px")
    .attr("y", function (d) { return d.height / 2 + 6; })
    .attr("x", function (d) { return d.width / 2; })
    .text(function (d) { return d.label; });

// Inicia a simulação ajustando a posição dos vértices e arestas
force.start();

// Posiciona o início e o fim das arestas nos centros dos vértices conectados
link.attr('x1', function (d) { return d.source.x + d.source.width / 2; })
    .attr('y1', function (d) { return d.source.y + d.source.height / 2; })
    .attr('x2', function (d) { return d.target.x + d.target.width / 2; })
    .attr('y2', function (d) { return d.target.y + d.target.height / 2; });

linkText.attr('x', function (d) { return (d.source.x + d.target.x) / 2; })
    .attr('y', function (d) { return (d.source.y + d.target.y) / 2; });

// Algoritmo de Dijkstra simplificado para encontrar o menor caminho
function calculateShortestPath(targetNode) {
    var dist = {}, // Armazena a menor distância de 'A' até cada vértice
        prev = {}, // Armazena o vértice anterior para recriar o caminho
        queue = []; // Lista de vértices a serem processados, ordenada pela menor distância

    // Inicialização da "tabela" vista em sala
    nodes.forEach(function (node, i) {
        dist[node.label] = Infinity;
        prev[node.label] = null;
        queue.push(node);
    });

    var startNode = nodes.find(function (n) { return n.label === 'UFC'; }); // Supondo 'A' como o ponto de distribuição
    dist[startNode.label] = 0;

    // Algoritmo de Dijkstra
    while (queue.length > 0) {
        queue.sort(function (a, b) { return dist[a.label] - dist[b.label]; });
        var u = queue.shift();

        links.forEach(function (link) {
            if (link.source.label === u.label || link.target.label === u.label) {
                var neighbor = link.source.label === u.label ? link.target : link.source;
                var alt = dist[u.label] + link.weight;
                if (alt < dist[neighbor.label]) {
                    dist[neighbor.label] = alt;
                    prev[neighbor.label] = u.label;
                }
            }
        });
    }

    // Limpa todas as arestas para sua cor padrão
    svg.selectAll('.link').style("stroke", "#777");

    // Exibe o menor caminho até o vértice clicado e destaca as arestas
    var path = [], u = targetNode.label;
    while (prev[u]) {
        path.unshift(u);
        u = prev[u];
    }
    path.unshift(startNode.label);

    // Percorre o caminho e muda a cor das arestas que fazem parte do menor caminho
    for (var i = 0; i < path.length - 1; i++) {
        links.forEach(function (link) {
            if ((link.source.label === path[i] && link.target.label === path[i + 1]) ||
                (link.source.label === path[i + 1] && link.target.label === path[i])) {
                svg.selectAll('.link')
                    .filter(function (d) { return d === link; })
                    .style("stroke", "#ff0000");
            }
        });
    }

    // O comentário abaixo emite um alert mostrando a ordem dos vértices
    //alert("Menor caminho até " + targetNode.label + ": " + path.join(" -> "));
}