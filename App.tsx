import { h, Fragment } from 'preact'
import { useEffect } from 'preact/hooks'

export default function App() {
    useEffect(() => {
        console.log('didmount in browser')
    }, [])
    return (
        <h1>Hello World</h1>
    );
}