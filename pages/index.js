import HomeContainer from '../src/modules/home/homeContainer';
import PublicLayout from '../src/modules/layout/publicLayout';

export default function IndexPage() {
  return (
    <>
    <PublicLayout>
      <HomeContainer />
    </PublicLayout>
    </>
  )
}
