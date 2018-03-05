import Link from 'next/link'
import Header from '../components/Header'
const Index = () => ([
    <Header />,
    <div>
        <Link href="/about" style={{fontSize: 20}}>
            <button>about page</button>
        </Link>
        <p>Hello world</p>
    </div>
])

export default Index