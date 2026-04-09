import Head from 'next/head';
import Image from 'next/image';
import RestaurantList from '../components/RestaurantsList';
import Container from '../components/styled/Container';


export default function Home({ restaurants }) {
  return (
    <Container maxWidth="80%">
      <RestaurantList restaurants={restaurants} />
    </Container>
  )
};
 
export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  });
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants,
    },
  };
}