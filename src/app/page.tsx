import Link from 'next/link';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.head}>Burgundary</h1>
      <p className={styles.p}>
        <strong>Your trusted web designer since 2024</strong>
      </p>

      <section>
        <form action="/search" method="GET" className={styles.form}>
          <label htmlFor="Bug">Bug Search</label>
          <input
            type="search"
            name="Bug"
            id="S1"
            placeholder="Search for other sites"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>
      </section>

      <div className={styles.section}>
        <section className={styles.services}>
          <h2>Services</h2>
          <ul>
            <li>Website/app template</li>
            <li>SEO</li>
            <li>Website/app Maintenance</li>
            <li>Backend & Frontend Development</li>
          </ul>
        </section>

        <section className={styles.products}>
          <h2>Products</h2>
          <ul>
            <li>Web-Application/websites</li>
            <li>Mobile Application</li>
            <li>Python</li>
            <li>Machine Learning-Models</li>
          </ul>
        </section>
      </div>

      <div className={styles.cards}>
        <div className={styles.E}>
          <h2>E-commerce</h2>
          <p>An E-commerce where all our products are waiting to be bought by you</p>
          <Link href="/shop">Store</Link>
        </div>
      </div>
    </div>
  )
}
