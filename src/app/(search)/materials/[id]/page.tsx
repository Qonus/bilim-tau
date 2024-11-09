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
          content="Это конспект по тригонометрии за 9-10 классы. Тут в пдф и фото вы можете найти все нужные формулы и теоремы по тригонометрии. Удачи!"
        />
      </div>
    </div>
  );
}
