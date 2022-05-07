import { useState } from 'react';
import type { AppProps } from 'next/app'
import Link from 'next/link';
import { Menu } from 'antd';
import { BgColorsOutlined, DotChartOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Menu className={styles.navigation} mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<BgColorsOutlined />}>
            <Link href="/">
              Color Swatch
            </Link>
          </Menu.Item>
          <Menu.Item key="studio" icon={<DotChartOutlined />}>
            <Link href="/studio">
              Studio
            </Link>
          </Menu.Item>
        </Menu>
        <div className="container">
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MyApp
