import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Bruna Domingues" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ad labore modi harum, fugit alias tempora. Blanditiis voluptates quos, quia animi vitae dolorum odit, minima aliquam eum iste magnam."/>
          <Post author="Bruna Domingues" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ad labore modi harum, fugit alias tempora. Blanditiis voluptates quos, quia animi vitae dolorum odit, minima aliquam eum iste magnam."/>
          <Post author="Bruna Domingues" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ad labore modi harum, fugit alias tempora. Blanditiis voluptates quos, quia animi vitae dolorum odit, minima aliquam eum iste magnam."/>
          <Post author="Bruna Domingues" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ad labore modi harum, fugit alias tempora. Blanditiis voluptates quos, quia animi vitae dolorum odit, minima aliquam eum iste magnam."/>
        </main>
      </div>
    </div>
    )
}