'use client';
import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Có thể bạn thích"}</h2>
            <h1 className={styles.title}>Phổ biến nhất</h1>
            <MenuPosts withImage={false} />
            <h2 className={styles.subtitle}>Khám phá qua</h2>
            <h1 className={styles.title}>Các loại</h1>
            <MenuCategories />
        </div>
    );
};

export default Menu;
