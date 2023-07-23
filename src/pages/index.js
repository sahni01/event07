import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader'
import { ReviewsComponent } from '@/components/review'

const HeroSection = dynamic(() => import('@/components/hero-section'), {
  loading: () => <Loader show={true} />,
})
const Categories = dynamic(() => import('@/components/categories'), {
  loading: () => <Loader show={true} />,
})
const ProductSection = dynamic(() => import('@/components/product-section'), {
  loading: () => <Loader show={true} />,
})




export default function Home() {
  return (
    <>
      <Head>
        <title>Event07</title>
        <meta name="description" content="Decoration for your celebrations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <HeroSection />
      <Categories />

      <ProductSection
        title={"Birthday Decoration"}
        type={"birthday-decorations"}
        bgGray
      />

      <ProductSection
        title={"Kid's Birthday Decoration"}
        type={"kids-birthday-decorations"}
      />

      <ProductSection
        title={"Anniversary Decoration"}
        type={"anniversary-decorations"}
        bgGray
      />

      <ProductSection
        title={"Baby Shower & Welcome"}
        type={"baby-shower-decorations"}
      />

      <ProductSection
        title={"Wedding Decoration"}
        type={"wedding-decorations"}
        bgGray
      />

      <ProductSection
        title={"New Year Decoration"}
        type={"new-year-decorations"}
      />

      <ProductSection
        title={"Valentine Decoration"}
        type={"valentine-decorations"}
        bgGray
      />

      <ProductSection
        title={"Purposal Decoration"}
        type={"purposal-decorations"}
      />

      <ProductSection
        title={"Party Decoration"}
        type={"party-decorations"}
        bgGray
      />

      <ProductSection
        title={"Haldi Decoration"}
        type={"haldi-decorations"}
      />

      <ProductSection
        title={"Mehndi Decoration"}
        type={"mehndi-decorations"}
        bgGray
      />

      <ProductSection
        title={"Live Cartoon Character"}
        type={"live-cartoon-character"}
      />

      <ProductSection
        title={"Photo & Video Shoot"}
        type={"photo-video-shoot"}
        bgGray
      />

      <ProductSection
        title={"Catering Service"}
        type={"catering-services"}
      />

      <ProductSection
        title={"Game Corridor"}
        type={"game-corridor"}
        bgGray
      />

      <ProductSection
        title={"Music System"}
        type={"music-system"}
      />

      <ProductSection
        title={"Other Decoration"}
        type={"other-decorations"}
        bgGray
      />

      <div className='mt-5'>
      <ReviewsComponent id={"homepage"} type={""} />
      </div>
    </>
  )
}
