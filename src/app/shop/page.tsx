import styles from './Shop.module.css';

export default function Shop() {
  return (
    <>
      <h1 className={styles.title}>Bug-Commerce</h1>

      <div className={styles.section}>
        <section className={styles.products}>
          <h2 id="PROD" className={styles.heading}>Products-section</h2>
        </section>

        <section className="Products_page">
          <div className={styles.card}>
            <img
              src="https://i.postimg.cc/fR1kZrvH/20250608-161244.png"
              alt="Basic Business Website"
              className={styles.cardImage}
            />
            <h3>Basic Business Website (3-5 pages)</h3>
            <p className={styles.price}><strong>Price: R1500-R4000</strong></p>
            <form action="review" method="POST" id="rev-basic" className={styles.form}>
              <label htmlFor="review-basic">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-basic"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-basic" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.postimg.cc/y6TMH3Tt/20250608-161401.png"
              alt="Standard Business Website"
              className={styles.cardImage}
            />
            <h3>Standard Business Website with contact forms, gallery and blogs</h3>
            <p className={styles.price}><strong>Price: R4500-R8000</strong></p>
            <form action="review" method="POST" id="rev-standard" className={styles.form}>
              <label htmlFor="review-standard">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-standard"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-standard" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.postimg.cc/3JmnTs7R/20250608-164608.png"
              alt="Premium Web Applications"
              className={styles.cardImage}
            />
            <h3>Premium Web Applications Custom logic, Dashboards, User Authentication</h3>
            <p className={styles.price}><strong>Price: R9000-R20000+</strong></p>
            <form action="review" method="POST" id="rev-premium" className={styles.form}>
              <label htmlFor="review-premium">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-premium"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-premium" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.postimg.cc/RVSNSfxH/20250608-164923.png"
              alt="Advanced Machine Learning"
              className={styles.cardImage}
            />
            <h3>Advanced Machine-Learning Deep Learning, Natural-language-processing, Image-recognition</h3>
            <p className={styles.price}><strong>Price: R8000-R20000+</strong></p>
            <form action="review" method="POST" id="rev-ml-advanced" className={styles.form}>
              <label htmlFor="review-ml-advanced">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-ml-advanced"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-ml-advanced" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img alt="Basic ML Models" className={styles.cardImage} />
            <h3>Basic ML Models (Scikit-learn Classifier / Regressor)</h3>
            <p className={styles.price}><strong>Price: R3000-R7000</strong></p>
            <form action="review" method="POST" id="rev-ml-basic" className={styles.form}>
              <label htmlFor="review-ml-basic">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-ml-basic"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-ml-basic" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img alt="Web Scrapers / Data Tools / Bots" className={styles.cardImage} />
            <h3>Web Scrapers / Data Tools / Bots</h3>
            <p className={styles.price}><strong>Price: R1000-R4000</strong></p>
            <form action="review" method="POST" id="rev-scrapers" className={styles.form}>
              <label htmlFor="review-scrapers">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-scrapers"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-scrapers" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img alt="Desktop GUI App" className={styles.cardImage} />
            <h3>Desktop GUI App (Tkinter, PyQt, etc.)</h3>
            <p className={styles.price}><strong>Price: R2,000 – R5,000</strong></p>
            <form action="review" method="POST" id="rev-desktop" className={styles.form}>
              <label htmlFor="review-desktop">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-desktop"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-desktop" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img alt="Basic Scripts or Tools" className={styles.cardImage} />
            <h3>Basic Scripts or Tools (Calculators, Automation)</h3>
            <p className={styles.price}><strong>Price: R500 – R1,500</strong></p>
            <form action="review" method="POST" id="rev-scripts" className={styles.form}>
              <label htmlFor="review-scripts">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-scripts"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-scripts" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img alt="Database or API-integrated App" className={styles.cardImage} />
            <h3>Database or API-integrated App</h3>
            <p className={styles.price}><strong>Price: R7,000 – R15,000</strong></p>
            <form action="review" method="POST" id="rev-db" className={styles.form}>
              <label htmlFor="review-db">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-db"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-db" className={styles.button}>Buy Product</button>
            </form>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.postimg.cc/mgt9PKkF/20250610-111940.png"
              alt="Simple App"
              className={styles.cardImage}
            />
            <h3>Simple App (e.g. To-Do List, Recipe App)</h3>
            <p className={styles.price}><strong>Price: R3,000 – R6,000</strong></p>
            <form action="review" method="POST" id="rev-simple" className={styles.form}>
              <label htmlFor="review-simple">Review</label>
              <input
                type="text"
                name="review"
                placeholder="Write a review"
                id="review-simple"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Submit</button>
              <button type="button" id="Buy-simple" className={styles.button}>Buy Product</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
