import Head from "next/head";

const CustomHead = ({ title, description, image, video, isVideo, url }) => {
  return (
    <Head>
      <title>LANA</title>
      {/* <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:video" content={isVideo ? fullVideo : ""} />
            <meta property="og:video:type" content={isVideo ? "video/mp4" : ""} />
            <meta property="og:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={fullUrl} /> */}
      <meta
        name="keywords"
        content={
          "No need for hardware, we provide the hashpower and our platform takes care of the mining. Simply buy a package, sit back, and wait for the block reward!"
        }
      />
    </Head>
  );
};

export default CustomHead;
