---
layout: page
title: First Move First Tree Traversal
description: A deterministic game tree search algorithm that prioritizes early decisions without heuristics
img: assets/img/First Move First Tree Traversal.png
importance: 3
category: research
---

**Overview**

We introduce 'first move first' (FMF), a deterministic search strategy for high-branching-factor game trees where initial decisions dominate path quality. Unlike standard depth-first search (DFS), which backtracks incrementally from leaf nodes to explore sibling branches, FMF systematically prioritizes the first unexplored successor at each node before backtracking to the earliest incompletely explored ancestor, requiring no heuristics or auxiliary data structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
           loading="eager" 
           path="assets/img/First Move First Tree Traversal.png" 
           title="**Figure 1:** FMF vs DFS/BFS traversal order. <em>Left:</em> DFS visits ABD→ABE. <em>Middle:</em> BFS explores layer-by-layer. <em>Right:</em> FMF visits ABD→ACF, prioritizing root alternatives." 
           class="img-fluid rounded z-depth-0" 
        %}
    </div>
</div>
