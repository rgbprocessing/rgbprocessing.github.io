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
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.svg" title="Tree traversal comparison" class="img-fluid rounded z-depth-0" %}
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

**Results**

We evaluated both algorithms on 10,000 randomly generated game deals, applying identical time limits of 1000 seconds. Overall, DFS slightly outperformed FMF by 55,905 unique states searched across 6,168 paired solvable deals. <b>Table 1</b> summarizes solve performance, showing comparable solve rates (63.5% DFS, 63.2% FMF) with 179 exclusive DFS solves and 148 exclusive FMF solves. Noteably the unsolveable games include both searches that timed out as well as searches that were verifiably unwinnable.

<div style="text-align: center; margin: 20px 0;">
<table class="results-table">
  <thead>
    <tr>
      <th> </th>
      <th>DFS</th>
      <th>FMF</th>
      <th>Overlap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solveable Deals</td>
      <td>63.5% (6,347)</td>
      <td>63.2% (6,316)</td>
      <td>61.7% (6,168)</td>
    </tr>
    <tr>
      <td>Exclusive Solves</td>
      <td>1.8% (179)</td>
      <td>1.5% (148)</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 1:</strong> Solve performance comparison
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf.png" title="Comparison of unique states searched in DFS versus FMF" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Comparison of unique states searched in DFS versus FMF
</div>

<b>Figure 3</b> shows the complementarity in hardest cases. FMF solved DFS's 10% most challenging deals (upper decile by unique states searched) on average with 11.09M fewer unique states (28.0M vs 17.0M, p<0.001), while DFS solved FMF's 10% hardest deals with 9.40M fewer unique states (27.9M vs 18.5M, p<0.001).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf (2).png" title="Difference in unique states over population decile binning of DFS and FMF" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 3:</strong> Difference in unique states over population decile binning of DFS and FMF. 
  <br>
  <em>Left:</em> Difference in unique states searched versus population deciles of DFS unique states searched.
  <br>
  <em>Right:</em> Difference in unique states searched versus population deciles of FMF unique states searched.
</div>

Figure 4 shows - Among paired solvable deals, FMF showed a tentative advantage on hardest cases. When binned by mean unique states searched ((DFS+FMF)/2), FMF's state advantage grew with difficulty across equally spaced bins. However this is limited by limited data in the high unique states searched due to timeouts where some solveable deals were excluded and also limited by the mean unique states searched not being the best objective measure of how difficult a deal is - a better measure would be the shortest optimal path or maybe percentage of paths leading to a win but that would require an infeasible amount of processing to exhaustively search all of the game trees.

FMF complements DFS - while DFS has slight overall edge (55K states), FMF dominates DFS's worst failure cases. algorithms could be used in combination or maybe a different hybrid/refactoring other than FMF would provide even better results without heuristics.

Figure 3 shows FMF's advantage growing with difficulty—binned by mean unique states searched ((DFS+FMF)/2) across 6 equally-spaced bins (n≥20/bin), FMF gained up to +150K states in the most difficult bin (95% CI shown). While promising, this trend is tentative due to timeout-excluded high-difficulty deals and mean states searched serving as a proxy rather than true optimal path difficulty. These complementary failure modes suggest parallel execution with early termination of the slower algorithm would maximize solve rate and performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf (4).png" title="FGS1 data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 4:</strong> Comparison of unique states searched in DFS versus FMF
</div>

Figure X shows equal-width binning of mean states searched ((DFS+FMF)/2), dividing the full value range into 10 equal intervals regardless of data density. This reveals local performance trends across the state-space magnitude spectrum.

**Conclusions**

FMF and DFS demonstrate complementary strengths without heuristics. While DFS shows slight overall advantage (+55,905 states, p=0.70), FMF dramatically outperforms on DFS-Hardest deals (-3.44M states, n=1,542), suggesting early-move prioritization targets precisely the cases where standard DFS gets trapped in suboptimal branches. Solve rates are equivalent (63.5% vs 63.2%). Future work could run both in parallel, selecting the minimum states explored across methods to guarantee optimal path discovery while avoiding individual algorithm failure modes.

FMF and DFS exhibit complementary performance profiles: FMF dominates DFS-Hardest deals (-3.44M states), while DFS outperforms on FMF-Hardest deals. Overall solve rates are equivalent (63.5% vs 63.2%)
