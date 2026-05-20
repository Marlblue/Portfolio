import { Object3D, Mesh, Material, Texture } from "three";

export const disposeNode = (node: Object3D) => {
  if (node instanceof Mesh) {
    if (node.geometry) {
      node.geometry.dispose();
    }

    if (node.material) {
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material: Material) => {
        // Dispose material
        material.dispose();

        // Dispose textures inside material
        for (const key in material) {
          const value = (material as any)[key];
          if (value && value instanceof Texture) {
            value.dispose();
          }
        }
      });
    }
  }
};

export const disposeHierarchy = (node: Object3D | null) => {
  if (!node) return;
  node.traverse((child) => {
    disposeNode(child);
  });
};
