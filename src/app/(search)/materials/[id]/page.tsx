import styles from "./page.module.scss";
import Material from "../../../../../components/MaterialComponent/Material";
import { useEffect, useState } from "react";
import { Material as MaterialType } from "../../../../../backend/objects/material"; // Import the Material type for TypeScript

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [material, setMaterial] = useState<MaterialType | null>(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await fetch(`/api/materials/${params.id}`);
        if (response.ok) {
          const data: MaterialType = await response.json();
          setMaterial(data);
        } else {
          console.error("Failed to fetch material");
        }
      } catch (error) {
        console.error("Error fetching material:", error);
      }
    };

    if (params.id) {
      fetchMaterial();
    }
  }, [params.id]);

  if (!material) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <div className={styles.article_page}>
      <div className={styles.article_page_wrapper}>
        <Material
          author={material.author}
          author_profile=""
          title={material.title}
          created_at={new Date(material.created_at)}
          description={material.description}
        />
      </div>
    </div>
  );
}
