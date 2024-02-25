---
name: NavMesh Theme Park
tools: [C#, Unity]
image: ../assets/images/navmesh.png
description: Queue management in a theme park
type: Game
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/XZLEZjXEFwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

I created a zoo-tycoon like simulation in Unity for IMAC school programming classes. We had to reverse-engineer a video and improve upon it.
The idea is to generate crowds and agents that circulates in the NavMesh. Agents want to visit the small houses. When someone is already inside, a queue is created so that the agents can enter one after the other.

Here is the few things that we did: 

- Create a terrain with the Unity procedural tool (height = 300, resolution = 512)
- Use multiple terrain layers (sand, water, etc)
- Have autonomous agents wandering around the field
- Add multiple point of interests with editable variables : visit duration, entry position, exit position, max allowed visitors (up to infinity)
- Navigation with NavMeshComponents : handle static obstacles, handle terrain heigth variation (A hole is an obstacle), handle moving obstacles (Other visitors)
- Handle waiting queues : optimize for performance (at least 60fps with 100 agents), handle low-speed areas (near to water)
- Crowd which do not visit attractions but interact with the terrain