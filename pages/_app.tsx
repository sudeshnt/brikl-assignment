import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Menu } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

const items = [
  {
    key: 'home',
    icon: <BgColorsOutlined />,
    label:  <Link href="/">
      Color Swatch
    </Link>
  },
  {
    key: 'studio',
    icon: <BgColorsOutlined />,
    label: <Link href="/studio">
      Studio
    </Link>
  }
]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Menu className={styles.navigation} mode="horizontal" defaultSelectedKeys={[router.pathname === '/studio' ? 'studio' : 'home']} items={items} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
