declare module "gray-matter" {
  interface GrayMatterFile {
    data: {
      title?: string;
      date?: string;
      excerpt?: string;
      tags?: string[];
      [key: string]: unknown;
    };
    content: string;
  }

  function matter(input: string): GrayMatterFile;
  export default matter;
}
