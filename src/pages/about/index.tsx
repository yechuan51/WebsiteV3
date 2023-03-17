import path from "path";
import fsPromise from "fs/promises";
import MarkdownContentComp from "@/components/markdown/markdownCotent";
import { InferGetStaticPropsType } from "next";

const ABOUT_PAGE_PATH = ["public", "content", "about", "about.md"];

export default function AboutPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { content, error } = props;
  if (error) {
    throw Error(error as any);
  }
  return (
    <div>
      <MarkdownContentComp content={content as string} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const targetPath = path.join(process.cwd(), ...ABOUT_PAGE_PATH);
    console.log(targetPath);
    const data = await fsPromise.readFile(targetPath, "utf-8");
    return { props: { content: data } };
  } catch (error) {
    console.error(error);
    return { props: { error: error } };
  }
}
