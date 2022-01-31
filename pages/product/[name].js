import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="next beginner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <a href="">
            <Image
              alt=""
              src={img.url}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            </a>
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact" pasHref>Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name }, // this is our ctx, the name property is coming from our data file
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;