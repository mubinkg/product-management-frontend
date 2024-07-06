import AppNav from '@/components/Navbar';
import styles from './home.module.css'
import { Container } from 'reactstrap';
import TopHero from '@/components/TopHero';


export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <AppNav/>
      </Container>
      <TopHero/>
    </main>
  );
}
