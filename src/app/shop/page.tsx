import styles from './Shop.module.css';

export default function Shop() {
  return (
    <div>
      <h1 className={styles.title}>Bug-Commerce</h1>
      <div className={styles.section}>
        <section className={styles.products}>
          <h2 className={styles.heading}>Products-section</h2>

          {/* Product 1 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/fR1kZrvH/20250608-161244.png" alt="Basic Site" />
            <h3>Basic Business Website (3–5 pages)</h3>
            <p className={styles.price}><strong>Price: R1500–R4000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review1">Review</label>
              <input className={styles.input} type="text" name="review1" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>

          {/* Product 2 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/y6TMH3Tt/20250608-161401.png" alt="Standard Site" />
            <h3>Standard Business Website with contact forms, gallery and blogs</h3>
            <p className={styles.price}><strong>Price: R4500–R8000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review2">Review</label>
              <input className={styles.input} type="text" name="review2" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>

          {/* Product 3 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/wMZrDtwC/20250608-161437.png" alt="Premium Site" />
            <h3>Premium eCommerce Website with payment gateway and inventory system</h3>
            <p className={styles.price}><strong>Price: R8500–R15000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review3">Review</label>
              <input className={styles.input} type="text" name="review3" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>

          {/* Product 4 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/KvkTzVK6/20250608-161502.png" alt="Logo Design" />
            <h3>Logo Design – Simple, bold and professional logos made custom</h3>
            <p className={styles.price}><strong>Price: R200–R1000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review4">Review</label>
              <input className={styles.input} type="text" name="review4" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>

          {/* Product 5 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/yNRBHp7X/20250608-161521.png" alt="SEO Optimization" />
            <h3>SEO Optimization – Rank your website and increase traffic</h3>
            <p className={styles.price}><strong>Price: R1000–R3000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review5">Review</label>
              <input className={styles.input} type="text" name="review5" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>

          {/* Product 6 */}
          <div className={styles.card}>
            <img className={styles.cardImage} src="https://i.postimg.cc/KjJKYjVf/20250608-161540.png" alt="Social Media Setup" />
            <h3>Social Media Page Setup and Optimization (Instagram, TikTok, Facebook)</h3>
            <p className={styles.price}><strong>Price: R500–R2000</strong></p>
            <form className={styles.form}>
              <label htmlFor="review6">Review</label>
              <input className={styles.input} type="text" name="review6" placeholder="Write a review" />
              <button className={styles.button} type="submit">Submit</button>
              <button className={styles.button} type="button">Buy Product</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
