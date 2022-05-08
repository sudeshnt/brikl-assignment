import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Menu } from 'antd';
import { WindowsOutlined, BgColorsOutlined, CodeSandboxOutlined, DotChartOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const items = [
  {
    key: 'home',
    icon: <WindowsOutlined />,
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
  },
  {
    key: 'box-space',
    icon: <CodeSandboxOutlined />,
    label: <Link href="/box-space">
      Box Space
    </Link>
  },
  {
    key: 'fabric',
    icon: <DotChartOutlined />,
    label: <Link href="/fabric">
      Fabric
    </Link>
  }
]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Menu className={styles.navigation} mode="horizontal" defaultSelectedKeys={[router.pathname.replace(/\//g, '') ?? 'home']} items={items} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
