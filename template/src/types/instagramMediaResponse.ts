import { InstagramMedia } from "./InstagramMedia";

export type InstagramMediaResponse = {
    data?: (InstagramMedia)[] | null;
    paging: Paging;
  }
  export interface Paging {
    cursors: Cursors;
  }
  export interface Cursors {
    before: string;
    after: string;
  }
  