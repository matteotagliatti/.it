export interface Frontmatter {
  titolo: string;
  autore: string;
  anno: number;
  tipologia: "libri" | "articoli";
  url?: string;
}