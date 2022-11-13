---
name: StyleTransfer
tools: [Python, PyTorch, PyTorch3D, Trimesh]
image: /assets/images/style-transfer.jpg
description: PyTorch3D use case of modeling 3D shapes.
type: AI
---

![preview](/assets/images/style-transfer.jpg)

<p>In collaboration with <a href="https://github.com/dsmtE" target="_blank">Enguerrand De Smet</a></p>

Deforming meshes can be used to represent a collection of objects with different shapes and poses. Meshes may differ in their number of vertices, faces and their topology. Such heterogeneity makes it difficult to efficiently implement batched operations on 3D data using operators provided by standard deep learning toolkits like PyTorch and Tensorflow. In our case study, as we use the library PyTorch3D, the mesh is a load_obj which is a file format containing the description of a 3D geometry. We draw on state-of-the-art methods for 3D shape prediction to build a mesh deformation system. It is based on the ECCV 2020 paper Modeling 3D Shapes by Reinforcement Learning.

We wrote a [paper](/assets/file/StyleTransfer.pdf) that explain into more details our approach.

We are featured on [papers with code](https://paperswithcode.com/paper/modeling-3d-shapes-by-reinforcement-learning) !


<p class="text-center">
{% include elements/button.html link="https://github.com/IMAC-projects/style-transfer" text="Check the source code" %}
</p>