import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../../components/Tool";
import {
  edit_page,
  tool,
  tools,
  downloadFile,
} from "../../src/content/content-es";
import { errors } from "../../src/content/content-es";
import { data_type } from "../[tool]";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";


export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export default ({ item, lang }: { item: data_type; lang: string }) => {
  return (
    <>
      <Head>
        <title>{item.seoTitle}</title>
        <meta name="description" content={item.description} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        <OpenGraph
          ogUrl={`https://www.pdfequips.com/es${item.to}`}
          ogDescription={item.description}
          ogLocale="es_ES"
          ogImageWidth="1200"
          ogImageHeight="630"
          ogTitle={item.seoTitle}
          ogImage={`https://www.pdfequips.com/images/es${item.to}.png`}
        />
      </Head>
      <NavBar lang={lang} path="remove-pages" />
      <Tool
        tools={tools}
        data={item}
        lang={lang}
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        downloadFile={downloadFile}
      />
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/remove-pages": { item: tool["Remove_Page"] },
};
