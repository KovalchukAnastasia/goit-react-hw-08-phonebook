import BackgroundImg from '../components/Image/Phonebook.jpg';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

export default function Home() {
  return <div style={styles.container}></div>;
}
