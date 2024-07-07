import AppNav from '@/components/Navbar';
import styles from './home.module.css'
import { Container } from 'reactstrap';
import TopHero from '@/components/TopHero';
import AssetAd from '@/components/homepage/AssetAd';
import Monitor from '@/components/homepage/Monitor';
import HomeStore from '@/components/homepage/HomeStore';
import HomeNotification from '@/components/homepage/HomeNotification';
import HomeDashboard from '@/components/homepage/HomeDashboard';
import HomeLocation from '@/components/homepage/HomeLocation';
import HomeProductAd from '@/components/homepage/HomeProductAd';
import HomeTestimonial from '@/components/homepage/HomeTestimonial';


export default function Home() {
  return (
    <main >
      <div className={styles.main}>
        <Container>
          <AppNav />
        </Container>
        <TopHero />
      </div>
      <AssetAd />
      <Monitor/>
      <HomeStore/>
      <HomeNotification/>
      <HomeDashboard/>
      <HomeLocation/>
      <HomeProductAd/>
      <HomeTestimonial/>
    </main>
  );
}
