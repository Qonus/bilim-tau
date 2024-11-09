"use client";
import styles from "./MaterialsPage.module.scss";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "../SignInComponent/SignIn";
import Link from "next/link";
import MaterialCard from "../MaterialCardComponent/MaterialCard";
import { useEffect, useState } from "react";
import { Material } from "../../backend/objects/material";

export default function MaterialsPage() {
  const { data: session } = useSession();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // Fetch materials from the API route
    const fetchMaterials = async () => {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setMaterials(data);
        } else {
          console.error("Failed to fetch materials");
        }
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <>
      <div className={styles.materialspage}>
        {session ? (
          <div>
            <Link className={styles.addpost} href="/postmaterial">
              <Image
                src="/add-circle.svg"
                alt="add"
                width={30}
                height={30}
              ></Image>
              Выложить материал
            </Link>
          </div>
        ) : (
          <SignIn />
        )}
        <div className={styles.results}>
          <div className={styles.results_wrapper}>
            {materials.map((material: Material) => (
              <MaterialCard
                key={material._id} // Use MongoDB _id as the key
                href={`/materials/${material._id}`}
                title={material.title}
                description={material.description}
                likes={material.likes}
                tags={material.tags || []} // Ensure tags are provided
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
