---
layout: page
title: First Move First Tree Traversal
description: A deterministic game tree search algorithm that prioritizes early decisions without heuristics
img: assets/img/First Move First Tree Traversal.svg
importance: 3
category: research
---

**Overview**

We introduce 'first move first' (FMF), a deterministic search strategy for high-branching-factor game trees where initial decisions dominate path quality. Unlike standard depth-first search (DFS), which backtracks incrementally from leaf nodes to explore sibling branches, FMF systematically prioritizes the first unexplored successor at each node before backtracking to the earliest incompletely explored ancestor, requiring no heuristics or auxiliary data structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.svg" title="FGS1 data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Tree traversal order comparison across three algorithms. 
  <br>
  <em>Left:</em> Depth-first search visits leaf nodes ABD→ABE (B's siblings sequentially).
  <br>
  <em>Middle:</em> Breadth-first search explores layer-by-layer.
  <br>
  <em>Right:</em> First-move first prioritizes first-level siblings (ABD→ACF).
</div>

**Motivation**

The algorithm was developed for Beleaguered Castle, a solitaire game where early moves critically shape the game state and late-game foundation-building moves have nominal influence on finding a winning path. Deals often have only one or few winning early move sequences but many possible late-game paths, mostly building up suit-specific foundations starting from the aces. DFS can get trapped exhaustively exploring non-winning branches from poor early moves. BFS explores every node for the optimal path, which is unfeasible for Beleaguered Castle's large game trees. We focus on finding the first viable winning path rather than the optimal one. FMF avoids both problems by changing the early moves first in its search and exploring later branches only if needed. Without relying on customized heuristics, we evaluate FMF's performance against baseline DFS for discovering winning paths in this domain.
