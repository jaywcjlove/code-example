
const code = `// example yacas code
Graph(edges_IsList) <-- [
    Local(v, e, f, t);

    vertices := {};

    ForEach (e, edges) [
        If (IsList(e), e := Head(e));
        {f, t} := Tail(Listify(e));

        DestructiveAppend(vertices, f);
        DestructiveAppend(vertices, t);
    ];

    Graph(RemoveDuplicates(vertices), edges);
];

10 # IsGraph(Graph(vertices_IsList, edges_IsList)) <-- True;
20 # IsGraph(_x) <-- False;

Edges(Graph(vertices_IsList, edges_IsList)) <-- edges;
Vertices(Graph(vertices_IsList, edges_IsList)) <-- vertices;

AdjacencyList(g_IsGraph) <-- [
    Local(l, vertices, edges, e, op, f, t);

    l := Association'Create();

    vertices := Vertices(g);
    ForEach (v, vertices)
        Association'Set(l, v, {});

    edges := Edges(g);

    ForEach(e, edges) [
        If (IsList(e), e := Head(e));
        {op, f, t} := Listify(e);
        DestructiveAppend(Association'Get(l, f), t);
        If (String(op) = "<->", DestructiveAppend(Association'Get(l, t), f));
    ];

    l;
];

`;

export default code;
