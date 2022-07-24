export default interface IFeed {
  id: number;
  title: string;
  body: string;
  content_type: {
    type: string;
    color: string;
  };
  ago: string;
  assets: string;
  paid: boolean;
}
