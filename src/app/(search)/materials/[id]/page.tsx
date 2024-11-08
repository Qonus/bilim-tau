import styles from "./page.module.scss";
import Material from "../../../../../components/MaterialComponent/Material";

export default async function ArticlePage({ params }: any) {
  
  return (
    <div className={styles.article_page}>
      <div className={styles.article_page_wrapper}>
        <Material
          title="This is title placeholder"
          publish_date={new Date("2019-01-16")}
          last_changed={new Date("2019-01-16")}
          image={"/favicon.ico"}
          content="Material content placeholder(lower should be sum media content)"
        />
      </div>
    </div>
  );
}
