# WebGL Liquid Glass Shaders: Research & Context

## Overview
The Liquid Glass effect relies on a pipeline of shaders to simulate the physical properties of glass: refraction, reflection (fresnel), and distortion.

## Vertex Shader (`vertexShader`)
**Role**: Geometry & Positioning
-   **Function**: Transforms 3D coordinates of the mesh (usually a simple quad for 2D effects) into 2D screen space.
-   **Key Responsibilities**:
    -   Passes Texture Coordinates (`uv`) to the fragment shader.
    -   Can implement vertex displacement (e.g., for water ripples), though in this "Liquid Glass" implementation, the shape logic is mostly handled in the fragment shader using SDFs.

## Background Fragment Shader (`FragmentbgShader`)
**Role**: Background Preparation
-   **Function**: Renders the background image that will be seen *through* the glass.
-   **Key Responsibilities**:
    -   **Screen-Space Mapping**: Calculates which part of the background image corresponds to the current pixel's position on screen. This creates the illusion that the glass is transparent and revealing the background behind it.
    -   **Cover/Contain Logic**: Handles aspect ratio scaling (`getCoverUV`) to ensure the background image covers the area correctly without stretching.
    -   **Blurring**: Often used in conjunction with a blur pass to create the "frosted" look of thick glass.

## Main Fragment Shader (`FragmentMain`)
**Role**: The Glass Effect
-   **Function**: Combines the background, blur, and shape logic to render the final glass object.
-   **Key Responsibilities**:
    -   **SDF (Signed Distance Functions)**: Defines the shape of the glass (e.g., rounded rectangles, blobs).
    -   **Refraction**: Distorts the UVs used to sample the background texture based on the "normal" (curvature) of the glass shape.
    -   **Fresnel**: Adds edge highlights to simulate light reflecting off the surface at glancing angles.

## Common Issues
-   **Doubled/Broken Background**: Often caused by incorrect UV mapping in `FragmentbgShader`. If the screen-space calculation is wrong (e.g., not accounting for Device Pixel Ratio `u_dpr` or element position `u_elePos`), the background may appear tiled, offset, or scaled incorrectly.
