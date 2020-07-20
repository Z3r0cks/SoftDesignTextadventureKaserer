namespace Textadventure {
  export abstract class SearchContent {

    static search(_contentID: string): string {
      let theContent: string;
      storyboard.forEach(element => {
        if (_contentID == element.id) {
          theContent = element.content;
        }
      });
      return theContent;
    }
  }
}
